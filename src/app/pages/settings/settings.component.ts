import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../core/config/config.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  config: any;

  constructor(private configService: ConfigService, private authService: AuthService) { }

  ngOnInit() {
    this.config = this.configService.getConfig();
  }

}
