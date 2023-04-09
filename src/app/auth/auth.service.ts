import { inject, Injectable } from '@angular/core';
import { EMPTY, filter, Observable, of, skip, tap } from 'rxjs';
import { useNavigate } from '../shared/navigate.hook';
import { ToastService } from '../shared/toast.facade.service';
import { AuthStateValue } from './auth.state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private toastService = inject(ToastService);
  private navigate = useNavigate();

  checkToken(token: string) {
    return of({
      auth: true,
      token: {},
    });
  }

  login(login: string, password: string) {
    return of(Boolean(login && password)).pipe(
      tap(() => {
        this.toastService.success('Zalogowano poprawnie!');
      })
    );
  }

  registerHandlingLogout(state: Observable<AuthStateValue>) {
    state
      .pipe(
        skip(1),
        filter(({ authenticated }) => !authenticated)
      )
      .subscribe(() => {
        localStorage.removeItem('token');
        this.navigate(['auth']);
      });
  }

  registerHandlingLogin(state: Observable<AuthStateValue>) {
    state.pipe(filter(({ authenticated }) => authenticated)).subscribe(() => {
      localStorage.setItem('token', 'token');
      this.navigate(['']);
    });
  }

  handleTokenFromLocalStorage() {
    const token = localStorage.getItem('token');

    if (!token) {
      return EMPTY;
    }

    return this.checkToken(token).pipe(filter(({ auth }) => auth));
  }
}
