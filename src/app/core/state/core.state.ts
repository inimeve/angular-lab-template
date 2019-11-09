import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {authReducer, AuthState} from '../auth/state/auth.reducer';
import {initAuthStateFromLocalStorage} from '../auth/state/auth.meta-reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initAuthStateFromLocalStorage
];

export interface AppState {
  auth: AuthState;
}
