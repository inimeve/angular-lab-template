import {Action, createReducer, on} from '@ngrx/store';
import {configToggleSidebarState} from './config.actions';

export type SidebarState = 'expanded' | 'compacted';

export interface ConfigState {
  sidebarState: string;
}

export const initialState: ConfigState = {
  sidebarState: 'expanded',
};

const reducer = createReducer(
  initialState,

  on(
    configToggleSidebarState,
    (state, payload) => ({...state, sidebarState: state.sidebarState === 'expanded' ? 'compacted' : 'expanded'})
  )
);

export function configReducer(state: ConfigState | undefined, action: Action): ConfigState {
  return reducer(state, action);
}
