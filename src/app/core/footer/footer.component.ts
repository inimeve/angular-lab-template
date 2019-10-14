import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  name$: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.name$ = this.http
      .get<any>('https://uinames.com/api/')
      .pipe(map(data => data.name + ' ' + data.surname));

    setInterval(() => {
      this.name$ = this.http
        .get<any>('https://uinames.com/api/')
        .pipe(map(data => data.name + ' ' + data.surname));
    }, 30000);


  }

}
