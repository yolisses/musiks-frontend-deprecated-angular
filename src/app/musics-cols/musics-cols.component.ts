import { Component, Input } from '@angular/core';
import { mockMusics } from 'src/mock/mock-musics';
import { Music } from '../music';

@Component({
  selector: 'app-musics-cols',
  templateUrl: './musics-cols.component.html',
  styleUrls: ['./musics-cols.component.css']
})
export class MusicsColsComponent {
  @Input()
  maxRows = 3

  @Input()
  musics: Music[] = mockMusics.concat(mockMusics);
}
