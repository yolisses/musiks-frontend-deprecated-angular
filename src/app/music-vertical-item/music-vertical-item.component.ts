import { Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Music } from '../music';
import { PlayerService } from '../player.service';
import { bigNumberString } from '../utils/bigNumberString';
import { secondsToDurationStrings } from '../utils/secondsToDurationString';

@Component({
  selector: 'app-music-vertical-item',
  templateUrl: './music-vertical-item.component.html',
  styleUrls: ['./music-vertical-item.component.css']
})
export class MusicVerticalItemComponent {
  @Input() music: Music;

  faPlay = faPlay

  bigNumberString = bigNumberString

  secondsToDurationStrings = secondsToDurationStrings

  constructor(private playerService:PlayerService) {}

  play() {
    this.playerService.setMusic(this.music);
  }
}
