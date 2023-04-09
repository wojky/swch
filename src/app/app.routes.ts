import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { ShellComponent } from './ui/shell.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes'),
      },
      {
        path: '',
        component: ShellComponent,
        canMatch: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('./cats/cats.routes'),
          },
        ],
      },
    ],
  },
];
