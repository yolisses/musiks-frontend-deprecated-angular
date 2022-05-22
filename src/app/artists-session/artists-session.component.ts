import { Component, Input } from '@angular/core';
import { mockArtists } from 'src/mock/mock-artists';
import { Artist } from '../artist';

@Component({
  selector: 'app-artists-session',
  templateUrl: './artists-session.component.html',
  styleUrls: ['./artists-session.component.css']
})
export class ArtistsSessionComponent {
  artists: Artist[] = mockArtists;

  @Input()
    name:string;

  @Input()
    intro:string;
}
