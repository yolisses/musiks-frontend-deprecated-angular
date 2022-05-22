import { Component, Input } from '@angular/core';
import { Artist } from '../artist';
import { bigNumberString } from '../utils/bigNumberString';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent  {
  bigNumberString = bigNumberString
  @Input() artist:Artist
}
