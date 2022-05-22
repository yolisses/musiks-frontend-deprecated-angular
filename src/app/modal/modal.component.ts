import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
   animations: [
    trigger('openClose', [
      state('open', style({
        top: 0,
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        top: '100vh',
      })),
      transition('open => closed', [
        animate('0.3s'),
      ]),
      transition('closed => open', [
        animate('0.1s'),
      ]),
    ]),
  ],
})
export class ModalComponent {

  constructor() { }

  handleClick(event:Event){
    event.stopPropagation()

  }

  faTimes = faTimes

}
