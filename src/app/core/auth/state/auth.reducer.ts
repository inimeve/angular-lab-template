import {Action, createReducer, on} from '@ngrx/store';
import {authLogin, authLoginError, authLoginSuccess, authLogout} from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  authData?: any;
}

export const initialState: AuthState = {
  isAuthenticated: false,
};

const reducer = createReducer(
  initialState,

  on(authLogin, state => ({...state, isAuthenticated: true})),

  on(authLogout, state => {
    delete state.authData;
    return {...state, isAuthenticated: false};
  }),

  on(authLoginSuccess, (state, payload) => ({...state, authData: payload.loginInfo})),

  on(authLoginError, state => state),
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}



