import {ActionReducer, INIT, UPDATE} from '@ngrx/store';
import {AppState} from '../../state/core.state';
import {getDefaultSettings} from '../defaultSettings';
import {SettingsState} from './settings.reducer';

export function initSettingsStateFromLocalStorage(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const newState = reducer(state, action);

    const defaultSettings: SettingsState = getDefaultSettings();
    const storedSettings: SettingsState = JSON.parse(localStorage.getItem('Settings')) as SettingsState;

    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      const settings: {settings: SettingsState} = {settings: {...newState.settings, ...defaultSettings, ...storedSettings}};
      return {...newState, ...settings};
    }
    return newState;
  };
}
