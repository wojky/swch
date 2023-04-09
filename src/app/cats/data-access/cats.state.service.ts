import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface CatsFactsStateValue {
  records: Map<string, string>;
}

@Injectable()
export class CatsFactsState {
  private state$$ = new BehaviorSubject<CatsFactsStateValue>({
    records: new Map(),
  });

  private get value() {
    return this.state$$.value;
  }

  get state$() {
    return this.state$$.asObservable();
  }

  get recordsAsArray$() {
    return this.state$.pipe(map((state) => Array.from(state.records.keys())));
  }

  addFact(fact: string) {
    const nexState = new Map(this.value.records).set(fact, fact);

    this.state$$.next({
      records: nexState,
    });
  }

  hasFact(fact: string) {
    return this.value.records.has(fact);
  }
}
