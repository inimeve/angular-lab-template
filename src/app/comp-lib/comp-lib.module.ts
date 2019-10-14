import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './card/card.component';
import {CounterComponent} from './counter/counter.component';

@NgModule({
  declarations: [CardComponent, CounterComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, CounterComponent]
})
export class CompLibModule { }
