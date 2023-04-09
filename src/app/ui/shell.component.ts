import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStateService } from '../auth/auth.state.service';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-shell',
  template: `
    <header>
      <button (click)="logout()">Logout</button>
    </header>
    <router-outlet />

  `,
  styles: [
    `
      :host {
        display: block;
        padding: 0 16px;
      }

      button {
        margin-left: auto;
        display: block;
      }
    `,
  ],
})
export class ShellComponent {
  private service = inject(AuthStateService);

  logout() {
    this.service.logout();
  }
}
