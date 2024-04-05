import { Routes } from '@angular/router';
import { ErrorComponent } from "./shared/error/error.component";

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
