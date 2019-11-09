import {ActionReducer, INIT, UPDATE} from '@ngrx/store';
import {AppState} from '../../state/core.state';
import {AuthState} from './auth.reducer';

export function initAuthStateFromLocalStorage(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const newState = reducer(state, action);

    const storedAuth = localStorage.getItem('Auth');

    if ([INIT.toString(), UPDATE.toString()].includes(action.type) && storedAuth) {
      const auth: AuthState = JSON.parse(storedAuth);
      return {...newState, auth};
    }
    return newState;
  };
}
