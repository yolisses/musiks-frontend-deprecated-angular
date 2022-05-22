import { Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Music } from '../music';
import { PlayerService } from '../player.service';
import { bigNumberString } from '../utils/bigNumberString';
import { secondsToDurationStrings } from '../utils/secondsToDurationString';

@Component({
  selector: 'app-mini-music-item',
  templateUrl: './mini-music-item.component.html',
  styleUrls: ['./mini-music-item.component.css']
})
export class MiniMusicItemComponent  {

  @Input() music: Music;

  secondsToDurationStrings = secondsToDurationStrings

  constructor(private playerService:PlayerService) {}

  play() {
    this.playerService.setMusic(this.music);
  }
}
