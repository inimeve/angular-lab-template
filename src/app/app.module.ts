import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {CoreModule} from './core/core.module';
import {CompLibModule} from './comp-lib/comp-lib.module';
import {ConfigService, configServiceInitializerFactory} from './core/config/config.service';
import {SidebarService} from './core/components/sidebar/sidebar.service';


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
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceInitializerFactory,
      deps: [ConfigService, SidebarService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
