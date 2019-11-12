import {Action, createReducer, on} from '@ngrx/store';
import {SidebarState} from '../../components/sidebar/sidebar.component.model';
import {changeSidebarState, toggleSidebarState} from './settings.actions';

export interface SettingsState {
  sidebarState?: SidebarState;
}

export const initialState: SettingsState = {
  sidebarState: SidebarState.STATE_COMPACTED,
};


const reducer = createReducer(
  initialState,

  on(toggleSidebarState, (state) => {
    return {...state, sidebarState: state.sidebarState === SidebarState.STATE_EXPANDED ?
        SidebarState.STATE_COMPACTED : SidebarState.STATE_EXPANDED};
  }),

  on(changeSidebarState, (state, payload) => {
    return {...state, sidebarState: payload.sidebarState};
  })
);

export function settingsReducer(state: SettingsState | undefined, action: Action): SettingsState {
  return reducer(state, action);
}
