import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import {AppState} from '../state/core.state';
import {selectAuthState, selectIsAuthenticated} from './state/auth.selectors';
import {Observable} from 'rxjs';
import {authLogin, authLogout} from './state/auth.actions';
import {AuthState} from './state/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private store: Store<AppState>) { }

  isLogged(): Observable<boolean> {
    return this.store.pipe(select(selectIsAuthenticated));
  }

  login(): void {
    this.store.dispatch(authLogin());
    this.router.navigate(['']);
  }

  logout(): void {
    this.store.dispatch(authLogout());
    this.router.navigate(['login']);
  }

  getAuthState(): Observable<AuthState> {
    return this.store.select(selectAuthState);
  }

}
