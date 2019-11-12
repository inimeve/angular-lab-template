import {ActionReducer, INIT, UPDATE} from '@ngrx/store';
import {AuthState} from './auth.reducer';
import {AppState} from '../../state/core.state';

export function initAuthStateFromLocalStorage(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const newState = reducer(state, action);

    const storedAuth = localStorage.getItem('Auth') ? JSON.parse(localStorage.getItem('Auth')) : null;

    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      const auth: {auth: AuthState} = {auth: {...newState.auth, ...storedAuth}};
      return {...newState, ...auth};
    }
    return newState;
  };
}
