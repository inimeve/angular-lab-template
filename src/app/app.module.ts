import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {CoreModule} from './core/core.module';
import {CompLibModule} from './comp-lib/comp-lib.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CoreModule.forRoot(),
    CompLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
