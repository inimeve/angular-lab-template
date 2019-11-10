import {createAction} from '@ngrx/store';

export const configLoadState = createAction(
  '[Config] Load state'
);

export const configLoadStateSuccess = createAction(
  '[Config] Load state success'
);

export const configLoadStateError = createAction(
  '[Config] Load state error'
);

export const configLoadStoredStateSuccess = createAction(
  '[Config] Load stored state success'
);

export const configLoadStoredStateError = createAction(
  '[Config] Load stored state error'
);

export const configToggleSidebarState = createAction(
  '[Config] Toggle sidebar state'
);
