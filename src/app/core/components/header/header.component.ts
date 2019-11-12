import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';
import {AuthService} from '../../auth/auth.service';
import {SettingsService} from '../../settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  avatarUrl: string = 'assets/images/avatar-set/';

  constructor(private sidebarService: SidebarService, private authService: AuthService, private settingService: SettingsService) {
    this.avatarUrl = this.avatarUrl.concat(Math.round(Math.random() * 8 + 1).toString() + '.png');
  }

  ngOnInit() {
  }

  toggleSidebar() {
    // this.sidebarService.toggle();
    this.settingService.toggleSidebarState();
  }

  logout() {
    this.authService.logout();
  }

}
