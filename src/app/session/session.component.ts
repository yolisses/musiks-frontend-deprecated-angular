import { Component, Input } from '@angular/core';
import { mockMusics } from '../../mock/mock-musics';
import { Music } from '../music';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent {
  @Input()
    name: string;

  @Input()
    intro:string;
}
