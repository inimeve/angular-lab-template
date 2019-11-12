import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/core/auth/auth.service';
import {SettingsService} from '../../core/settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private settingsService: SettingsService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  toggleSidebar(): void {
    this.settingsService.toggleSidebarState();
  }

}
