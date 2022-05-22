import { Component } from '@angular/core';
import { mockArtist } from 'src/mock/mock-artist';
import { Artist } from '../artist';
import { bigNumberString } from '../utils/bigNumberString';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent{
  bigNumberString=bigNumberString
  artist:Artist = mockArtist
}
