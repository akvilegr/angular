import { Directive, Input, OnInit } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {

  @Input() appState: State;

  constructor() {
   }

   ngOnInit() {
    console.log(this.appState);
   }

}
