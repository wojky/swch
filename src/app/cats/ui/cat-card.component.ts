import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-cat-card',
  template: ` <ng-content/>`,
  styles: [
    `
      :host {
        display: block;
        font-size: 1.25rem;
        border: 1px solid var(--primary);
        padding: 10px;
        border-radius: 5px;
        min-height: 2rem;
      }
    `,
  ],
})
export class CatCardComponent {}
