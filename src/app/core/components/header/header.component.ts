import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  avatarUrl: string = 'assets/avatar-set/';

  constructor(private sidebarService: SidebarService) {
    this.avatarUrl = this.avatarUrl.concat(Math.round(Math.random() * 8 + 1).toString() + '.png');
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

}
