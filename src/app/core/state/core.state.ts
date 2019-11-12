import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {authReducer, AuthState} from '../auth/state/auth.reducer';
import {initAuthStateFromLocalStorage} from '../auth/state/auth.meta-reducer';
import {settingsReducer, SettingsState} from '../settings/state/settings.reducer';
import {initSettingsStateFromLocalStorage} from '../settings/state/settings.meta-reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer
};

export const metaReducers: MetaReducer<AppState | AuthState | SettingsState>[] = [
  initAuthStateFromLocalStorage,
  initSettingsStateFromLocalStorage
];

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
}
