import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SidebarService} from '../components/sidebar/sidebar.service';
import {Store} from '@ngrx/store';
import {AppState} from '../state/core.state';
import {SidebarState} from '../components/sidebar/sidebar.component.model';
import {changeSidebarState, toggleSidebarState} from './state/settings.actions';
import {SettingsState} from './state/settings.reducer';
import {selectSettingsState, selectSidebarState} from './state/settings.selectors';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private sidebarService: SidebarService,
    private store: Store<AppState>) {

    this.store.select(selectSidebarState).subscribe((sidebarState: SidebarState) => {
      this.sidebarService.setState(sidebarState);
    });
  }

  public setSettingsState(settings: SettingsState): void {
    this.store.dispatch(changeSidebarState({sidebarState: settings.sidebarState}));
  }

  public getSettingsState(): Observable<SettingsState> {
    return this.store.select(selectSettingsState);
  }


  public toggleSidebarState(): void {
    this.store.dispatch(toggleSidebarState());
  }

}

