import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PAGES_ROUTES } from './pages/pages-routing.module';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AuthGuardService } from './core/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: PAGES_ROUTES,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
