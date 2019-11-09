import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../state/core.state';
import {AuthState} from './auth.reducer';

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
)

