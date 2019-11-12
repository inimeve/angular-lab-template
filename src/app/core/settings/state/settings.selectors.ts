import {AppState} from '../../state/core.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SettingsState} from './settings.reducer';

export const selectSettingsState = createFeatureSelector<AppState, SettingsState>(
  'settings'
);

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

export const selectSidebarState = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.sidebarState
);
