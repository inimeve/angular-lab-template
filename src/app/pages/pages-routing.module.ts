import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

export const PAGES_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'todos', component: TodosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
