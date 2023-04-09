import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../shared/toast.facade.service';

export const HttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  const clonedReq = req.clone();

  return next(clonedReq).pipe(
    catchError((err: HttpErrorResponse) => {
      toastService.error(err.message, 'błąd');

      return EMPTY;
    })
  );
};
