import {Component, HostBinding, OnInit} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SidebarState} from './sidebar.component.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  state: SidebarState = SidebarState.STATE_COMPACTED;

  @HostBinding('class.compacted')
  get compacted() {
    return this.state === SidebarState.STATE_COMPACTED;
  }

  @HostBinding('class.expanded')
  get expanded() {
    return this.state === SidebarState.STATE_EXPANDED;
  }

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.sidebarService.onStateChanged()
      .subscribe((data: SidebarState) => {
        this.setState(data);
      });
  }

  public setState(state: SidebarState) {
    this.state = state;
  }

}
