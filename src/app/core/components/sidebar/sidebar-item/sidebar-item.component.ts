import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input()
  routerLink: string;

  @Input()
  icon: string;

  @Input()
  label: string;

  @HostBinding('class.active')
  get active() {
    return this.routerLink ? this.router.url.includes(this.routerLink) : false;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
