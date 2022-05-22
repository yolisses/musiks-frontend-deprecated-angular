import { Component, OnInit } from '@angular/core';
import {
  faForwardStep, faPause, faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { mockMusics } from 'src/mock/mock-musics';
import { Music } from '../music';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-mini-player',
  templateUrl: './mini-player.component.html',
  styleUrls: ['./mini-player.component.css'],
})
export class MiniPlayerComponent implements OnInit {
  time:number;

  music:Music;

  playing:boolean;

  percentage:number;

  faPlay = faPlay;

  faPause = faPause;

  faForwardStep = faForwardStep;

  constructor(public playerService:PlayerService) {
  }

  ngOnInit(): void {
    this.playerService.playing.subscribe(
      (value) => { this.playing = value; },
    );
    this.playerService.music.subscribe(
      (value) => { this.music = value; },
    );
    this.playerService.time.subscribe(
      (value) => {
        this.time = value;
        if (this.music && this.time) {
          this.percentage = (100 * this.time) / this.music.duration;
        } else {
          this.percentage = 0;
        }
      },
    );
  }
}
