import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CatsFactsState } from './data-access/cats.state.service';
import { LazyScrollContainer } from '../shared/lazy-scroll-container.component';
import { CatCardComponent } from './ui/cat-card.component';
import { CatsApiService } from './data-access/cats.api.service';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, CatCardComponent, LazyScrollContainer],
  providers: [CatsFactsState],
  selector: 'app-cats',
  template: `
    <h1>Cats facts!</h1>
    <ng-container *ngIf="facts$ | async as facts; else loading">
      <app-lazy-scroll-container [source$]="addFact$">
        <ng-container *ngIf="facts.length; else loading">
          <app-cat-card #item *ngFor="let fact of facts; trackBy: trackBy">{{
            fact
          }}</app-cat-card>
        </ng-container>
      </app-lazy-scroll-container>
    </ng-container>

    <ng-template #loading>Ładowanie...</ng-template>
  `,
  styles: [
    `
      app-cat-card {
        margin-bottom: 8px;
      }
    `,
  ],
})
export class CatsComponent {
  private service = inject(CatsApiService);
  private factsState = inject(CatsFactsState);

  facts$ = this.factsState.recordsAsArray$;

  addFact$ = this.service.getFact().pipe(
    tap((fact) => {
      if (this.factsState.hasFact(fact)) {
        this.addFact$.subscribe();
        return;
      }

      this.factsState.addFact(fact);
    })
  );

  trackBy(_: number, item: string) {
    return item;
  }
}
