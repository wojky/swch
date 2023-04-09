import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthStateService } from './auth.state.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  selector: 'app-auth',
  styles: [
    `
      :host {
        display: grid;
        place-items: center;
        padding: 2rem;
      }

      form {
        border: 1px solid var(--primary);
        padding: 2rem;
        border-radius: 5px;
      }

      div {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        p {
          font-size: 0.75rem;
          color: red;
        }
      }
    `,
  ],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <div>
        <label for="login">Login:</label>
        <input formControlName="login" id="login" />
        <p *ngIf="loginCtrl.touched && loginCtrl.errors">
          Podano błędną nazwę użytkownika
        </p>
      </div>
      <div>
        <label for="password">Password:</label>
        <input formControlName="password" id="password" type="password" />
        <p *ngIf="passwordCtrl.touched && passwordCtrl.errors">
          Podane błędne hasło
        </p>
      </div>

      <button>Zaloguj</button>
    </form>
  `,
})
export class AuthComponent {
  private service = inject(AuthStateService);
  private builder = inject(NonNullableFormBuilder);

  loginForm = this.builder.group({
    login: this.builder.control('', [Validators.required]),
    password: this.builder.control('', [Validators.required]),
  });

  get loginCtrl() {
    return this.loginForm.controls.login;
  }

  get passwordCtrl() {
    return this.loginForm.controls.password;
  }

  login() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    const { login, password } = this.loginForm.getRawValue();

    this.service.login(login, password);
  }
}
