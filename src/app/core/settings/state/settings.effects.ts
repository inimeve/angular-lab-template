import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/core.state';
import {tap, withLatestFrom} from 'rxjs/operators';
import {changeSidebarState, toggleSidebarState} from './settings.actions';
import {selectSettingsState} from './settings.selectors';

@Injectable()
export class SettingsEffects {

  constructor(private actions$: Actions, private store: Store<AppState>) {}

  persistSettingsState = createEffect(
    () => this.actions$.pipe(
      ofType(
        changeSidebarState,
        toggleSidebarState
      ),
      withLatestFrom(this.store.select(selectSettingsState)),
      tap(([action, settingState]) => {
        localStorage.setItem('Settings', JSON.stringify(settingState));
      })
    ),
    {dispatch: false}
  );

}
