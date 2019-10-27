import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {SidebarState} from './sidebar.component.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private state$ = new BehaviorSubject<SidebarState>(SidebarState.STATE_COMPACTED);

  constructor() {}

  setConfig(defaultSidebarState: SidebarState) {
    switch (defaultSidebarState) {
      case SidebarState.STATE_COMPACTED:
        this.state$.next(SidebarState.STATE_COMPACTED);
        break;
      case SidebarState.STATE_EXPANDED:
        this.state$.next(SidebarState.STATE_EXPANDED);
        break;
    }
  }

  setState(state: SidebarState) {
    this.state$.next(state);
  }

  toggle() {
    if (this.state$.getValue() === SidebarState.STATE_COMPACTED) {
      this.state$.next(SidebarState.STATE_EXPANDED);
    } else {
      this.state$.next(SidebarState.STATE_COMPACTED);
    }
  }

  onStateChanged(): Observable<SidebarState> {
    return this.state$;
  }

}
