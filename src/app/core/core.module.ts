import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarItemComponent} from './components/sidebar/sidebar-item/sidebar-item.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SidebarService} from './components/sidebar/sidebar.service';
import {FluidLayoutComponent} from './layouts/fluid-layout/fluid-layout.component';
import {ColumnLayoutComponent} from './layouts/column-layout/column-layout.component';

const COMPONENTS = [
  HeaderComponent,
  SidebarComponent,
  SidebarItemComponent,
  FooterComponent,
  FluidLayoutComponent,
  ColumnLayoutComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [...COMPONENTS]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SidebarService
      ]
    } as ModuleWithProviders;
  }
}
