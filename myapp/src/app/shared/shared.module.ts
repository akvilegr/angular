import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, ItemComponent, StateDirective],
  exports: [NavComponent, ItemComponent, StateDirective]
})
export class SharedModule { }
