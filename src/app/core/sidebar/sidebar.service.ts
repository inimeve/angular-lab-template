import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { SidebarComponent, SidebarState } from './sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private state$ = new BehaviorSubject<SidebarState>(SidebarState.STATE_COMPACTED);

  constructor() { }

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
