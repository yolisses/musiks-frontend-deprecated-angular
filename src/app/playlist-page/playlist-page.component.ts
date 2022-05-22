import { Component } from '@angular/core';
import { faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';
import { mockPlaylist } from 'src/mock/mock-playlist';
import { Playlist } from '../playlist';
import { secondsToDurationStrings } from '../utils/secondsToDurationString';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent  {
  playlist:Playlist = mockPlaylist
  secondsToDurationStrings = secondsToDurationStrings;

  faRandom = faRandom
  faPlay=faPlay
}
