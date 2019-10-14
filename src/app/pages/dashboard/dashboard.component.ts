import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: any[] = [];

  constructor() {

    for (let i = 0; i < 20; i++) {
      this.cards.push({title: 'Counter ' + i});
    }

  }

  ngOnInit() {
  }

}
