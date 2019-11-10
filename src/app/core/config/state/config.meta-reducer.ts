import {ActionReducer, INIT, UPDATE} from '@ngrx/store';
import {ConfigState} from './config.reducer';

export function initConfigStateFromLocalStorage(reducer: ActionReducer<ConfigState>): ActionReducer<ConfigState> {
  return (state, action) => {
    const newState = reducer(state, action);

    const storedConfig = localStorage.getItem('Config');

    if ([INIT.toString(), UPDATE.toString()].includes(action.type) && storedConfig) {
      const config: ConfigState = JSON.parse(storedConfig);
      return {...newState, config};
    }
    return newState;
  };
}
