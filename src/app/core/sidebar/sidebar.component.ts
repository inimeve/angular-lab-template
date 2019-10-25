import { Component, OnInit, ElementRef, HostBinding } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  compacted: boolean = true;

  @HostBinding('class.compacted')
  get isCompact() {
    return this.compacted;
  }

  @HostBinding('class.expanded')
  get isExpanded() {
    return !this.compacted;
  }

  constructor(private element: ElementRef, private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.onToggle()
      .subscribe((data: {expanded: boolean}) => {
        this.toggle();
      });
  }

  public toggle() {
    this.compacted = !this.compacted;
  }

}
