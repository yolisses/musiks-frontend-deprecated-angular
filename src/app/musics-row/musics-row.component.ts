import { Component } from '@angular/core';
import { mockMusics } from 'src/mock/mock-musics';
import { Music } from '../music';

@Component({
  selector: 'app-musics-row',
  templateUrl: './musics-row.component.html',
  styleUrls: ['./musics-row.component.css']
})
export class MusicsRowComponent  {
  musics: Music[] = mockMusics;
}
