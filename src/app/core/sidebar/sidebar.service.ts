import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private toggle$ = new Subject<{ expanded: boolean }>();

  constructor() { }

  toggle(expanded = false) {
    this.toggle$.next({expanded});
  }

  onToggle(): Observable<{expanded: boolean}> {
    return this.toggle$;
  }

}
