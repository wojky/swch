import { Injectable } from '@angular/core';

export interface ToastConfig {}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  success(msg: string, title = '', config?: ToastConfig) {
    alert(`${title ? title + ': ' : ''}${msg}`);
  }

  warn(msg: string, title = '', config?: ToastConfig) {
    alert(`${title ? title + ': ' : ''}${msg}`);
  }

  error(msg: string, title = '', config?: ToastConfig) {
    alert(`${title ? title + ': ' : ''}${msg}`);
  }
}
