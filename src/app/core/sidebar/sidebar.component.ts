import { Component, OnInit, ElementRef, HostBinding } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  shrink: boolean;

  @HostBinding('class.shrink')
  get isShrink() {
    return this.shrink;
  }

  constructor(private element: ElementRef, private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.onToggle()
      .subscribe((data: {expanded: boolean}) => {
        this.toggle();
      });
  }

  public toggle() {
    this.shrink = !this.shrink;
  }

}
