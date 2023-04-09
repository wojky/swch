import { InjectionToken } from '@angular/core';

export const CATS_API_URL = new InjectionToken('', {
  factory() {
    return 'https://meowfacts.herokuapp.com';
  },
});
