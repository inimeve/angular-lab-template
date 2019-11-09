import {createAction, props} from '@ngrx/store';

export const authLogin = createAction('[Auth] Login');
export const authLogout = createAction('[Auth] Logout');

export const authLoginSuccess = createAction(
  '[Auth] Login success',
  props<{loginInfo: any}>()
);

export const authLoginError = createAction(
  '[Auth] Login error',
  props<{loginError: any}>()
);
