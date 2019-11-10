import {AppState} from '../../state/core.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ConfigState} from './config.reducer';

export const selectConfigState = createFeatureSelector<AppState, ConfigState>(
  'config'
);

export const selectConfig = createSelector(
  selectConfigState,
  (state: ConfigState) => state
);

export const selectSidebarState = createSelector(
  selectConfigState,
  (state: ConfigState) => state.sidebarState
);
