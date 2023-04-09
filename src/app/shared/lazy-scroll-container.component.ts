import { DOCUMENT } from '@angular/common';
import {
  Component,
  Input,
  ContentChildren,
  ViewContainerRef,
  QueryList,
  inject,
  NgZone,
} from '@angular/core';
import {
  BehaviorSubject,
  filter,
  fromEvent,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-lazy-scroll-container',
  template: `<ng-content/>`,
})
export class LazyScrollContainer<T> {
  @Input() set source$(stream: Observable<T>) {
    this.loadFn = () => {
      stream.pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (this.isAppScrollable()) {
          this.loadFn();
        }
      });
    };
  }

  @ContentChildren('item', { read: ViewContainerRef })
  cards!: QueryList<ViewContainerRef>;

  private zone = inject(NgZone);
  private doc = inject(DOCUMENT);

  private loadBalancer$ = new BehaviorSubject({
    loading: false,
  });
  private destroy$ = new Subject<void>();

  private lastItemHeight = 0;

  loadFn!: () => void;

  ngOnInit() {
    this.loadFn();

    this.loadBalancer$
      .pipe(
        takeUntil(this.destroy$),
        filter((state) => state.loading)
      )
      .subscribe(() => {
        this.loadFn();
      });

    this.zone.runOutsideAngular(() => {
      this.handleResizeEvent();
      this.handleScrollEvent();
    });
  }

  ngAfterContentInit() {
    this.cards.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.loadBalancer$.value.loading) {
        this.loadBalancer$.next({ loading: false });
      }

      this.lastItemHeight =
        this.cards.last.element.nativeElement.getBoundingClientRect().height;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private handleResizeEvent() {
    fromEvent(window, 'resize')
      .pipe(
        takeUntil(this.destroy$),
        filter(() => this.isAppScrollable())
      )
      .subscribe(() => {
        this.zone.run(() => {
          this.loadFn();
        });
      });
  }

  private handleScrollEvent() {
    fromEvent(this.doc, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const documentElement = this.doc.documentElement;
        const body = this.doc.body;
        const currentBodyHeight = body.clientHeight;
        const currentScrollPosition =
          documentElement.clientHeight +
          Math.abs(Math.floor(body.getBoundingClientRect().y));
        const leftToScrollValue = currentBodyHeight - currentScrollPosition;

        this.runLoadBalancer(leftToScrollValue);
      });
  }

  private runLoadBalancer(leftToScrollValue: number) {
    if (
      this.loadBalancer$.value.loading ||
      leftToScrollValue > this.lastItemHeight
    ) {
      return;
    }

    this.zone.run(() => {
      this.loadBalancer$.next({ loading: true });
    });
  }

  private isAppScrollable() {
    return this.doc.documentElement.clientHeight > this.doc.body.clientHeight;
  }
}
