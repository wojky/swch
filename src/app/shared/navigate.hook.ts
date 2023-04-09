import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function useNavigate() {
  const router = inject(Router);

  return router.navigate.bind(router);
}
