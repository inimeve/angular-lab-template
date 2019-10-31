import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  avatarUrl: string = 'assets/images/avatar-set/';

  constructor(private sidebarService: SidebarService, private authService: AuthService) {
    this.avatarUrl = this.avatarUrl.concat(Math.round(Math.random() * 8 + 1).toString() + '.png');
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  logout() {
    this.authService.logout();
  }

}
