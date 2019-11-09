import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {authLogin, authLoginError, authLoginSuccess, authLogout} from './auth.actions';
import {catchError, concatMap, map, tap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../state/core.state';
import {select, Store} from '@ngrx/store';
import {selectAuthState} from './auth.selectors';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private store: Store<AppState>, private http: HttpClient) {}

  loginEffect = createEffect(
    () => this.actions$.pipe(
      ofType(authLogin),
      concatMap(() => this.http.get<any>('http://5d9cfa7666d00400145ca1cc.mockapi.io/mock-data').pipe(
        map((res: any | any[]) => authLoginSuccess({loginInfo: res.length})),
        catchError(err => of(authLoginError({loginError: 'ERRRORRR'})))
      ))
    ),
    {dispatch: true}
  );

  persistAuthState = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          authLogin,
          authLogout,
          authLoginSuccess,
          authLoginError
        ),
        withLatestFrom(this.store.pipe(select(selectAuthState))),
        tap(([action, authState]) => {
          localStorage.setItem('Auth', JSON.stringify(authState));
        })
      ),
    {dispatch: false}
  );

}
