import { Component, Input } from '@angular/core';
import { Music } from '../music';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css'],
})
export class MusicItemComponent  {
  @Input() music: Music;

  constructor(private playerService:PlayerService) {}

  play() {
    this.playerService.setMusic(this.music);
  }
}
