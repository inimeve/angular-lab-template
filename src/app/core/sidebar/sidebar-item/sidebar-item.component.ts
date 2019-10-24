import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
