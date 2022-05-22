import { Component } from '@angular/core';
import { mockMusics } from '../mock/mock-musics';
import { Music } from './music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  musics: Music[] = mockMusics;

  title = 'Musiks';
}
