import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [PagesComponent, HomeComponent, TodosComponent, ChildComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
