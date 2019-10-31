import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<app-fluid-layout></app-fluid-layout>'
  // template: '<app-column-layout></app-column-layout>'
  template: '<router-outlet></router-outlet>'

})
export class AppComponent {
  title = 'angular-state-with-services';
}
