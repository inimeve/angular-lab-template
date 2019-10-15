import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  avatarUrl: string = 'assets/avatar-set/';

  constructor() {
    this.avatarUrl = this.avatarUrl.concat(Math.round(Math.random() * 8 + 1).toString() + '.png');
  }

  ngOnInit() {
  }

}
