import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AuthModule} from './auth/auth.module';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarItemComponent} from './components/sidebar/sidebar-item/sidebar-item.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SidebarService} from './components/sidebar/sidebar.service';
import {ColumnLayoutComponent} from './layouts/column-layout/column-layout.component';
import {FluidLayoutComponent} from './layouts/fluid-layout/fluid-layout.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './state/core.state';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/state/auth.effects';

const MODULES = [
  AuthModule,

  // ngrx
  StoreModule.forRoot(reducers, {metaReducers}),
  EffectsModule.forRoot([AuthEffects])
];

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
    HttpClientModule,
    ...MODULES,
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
