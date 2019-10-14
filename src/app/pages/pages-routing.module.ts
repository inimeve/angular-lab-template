import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AllItemsComponent} from './all-items/all-items.component';
import {SettingsComponent} from './settings/settings.component';

export const PAGES_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'allItems', component: AllItemsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
