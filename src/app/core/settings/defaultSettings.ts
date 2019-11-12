import {SidebarState} from '../components/sidebar/sidebar.component.model';
import {SettingsState} from './state/settings.reducer';

export function getDefaultSettings(): SettingsState {
  return {
    sidebarState: SidebarState.STATE_EXPANDED
  };
}
