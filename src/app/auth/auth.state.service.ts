import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

export interface AuthStateValue {
  authenticated: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private service = inject(AuthService);
  private state$$ = new BehaviorSubject<AuthStateValue>({
    authenticated: false,
  });

  get state$() {
    return this.state$$.asObservable();
  }

  constructor() {
    this.service.registerHandlingLogout(this.state$);
    this.service.registerHandlingLogin(this.state$);

    this.service.handleTokenFromLocalStorage().subscribe(() => {
      this.state$$.next({ authenticated: true });
    });
  }

  login(login: string, password: string) {
    this.service.login(login, password).subscribe(() => {
      this.state$$.next({ authenticated: true });
    });
  }

  logout() {
    this.state$$.next({ authenticated: false });
  }
}
