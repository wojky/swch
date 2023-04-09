import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { useNavigate } from '../shared/navigate.hook';
import { AuthStateService } from './auth.state.service';

export const AuthGuard: CanMatchFn = () => {
  const { state$ } = inject(AuthStateService);
  const navigate = useNavigate();

  return state$.pipe(
    map(({ authenticated }) => authenticated),
    tap((isAuth) => {
      if (isAuth) {
        return;
      }

      navigate(['auth']);
    })
  );
};
