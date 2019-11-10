import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {authReducer, AuthState} from '../auth/state/auth.reducer';
import {initAuthStateFromLocalStorage} from '../auth/state/auth.meta-reducer';
import {configReducer, ConfigState} from '../config/state/config.reducer';
import {initConfigStateFromLocalStorage} from '../config/state/config.meta-reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  config: configReducer
};

export const metaReducers: MetaReducer<AppState | AuthState | ConfigState>[] = [
  initAuthStateFromLocalStorage,
  initConfigStateFromLocalStorage
];

export interface AppState {
  auth: AuthState;
  config: ConfigState;
}
