import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { SettingsComponent } from './settings/settings.component';
import {CompLibModule} from '../comp-lib/comp-lib.module';


@NgModule({
  declarations: [PagesComponent, DashboardComponent, AllItemsComponent, SettingsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CompLibModule
  ]
})
export class PagesModule { }
