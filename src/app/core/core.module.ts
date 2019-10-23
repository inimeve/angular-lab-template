import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SidebarService } from './sidebar/sidebar.service';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: CoreModule,
      providers: [
        SidebarService
      ]
    }
  }
}
