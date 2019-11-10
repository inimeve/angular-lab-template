import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AppState} from '../../state/core.state';
import {Store} from '@ngrx/store';
import {configToggleSidebarState} from './config.actions';
import {tap, withLatestFrom} from 'rxjs/operators';
import {selectConfigState} from './config.selectors';

@Injectable()
export class ConfigEffects {

  constructor(private actions$: Actions, private store: Store<AppState>) {}

  persistConfigState = createEffect(
    () => this.actions$.pipe(
      ofType(configToggleSidebarState),
      withLatestFrom(this.store.select(selectConfigState)),
      tap(([action, configState]) => {
        localStorage.setItem('Config', JSON.stringify(configState));
      })
    ),
    {dispatch: false}
  );

}
