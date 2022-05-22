import {
  Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
})
export class AudioComponent implements OnInit {
  time:number;

  lastTime:number;

  @ViewChild('audioRef') audioRef: ElementRef;

  constructor(public playerService:PlayerService) { }

  changeTime(event:Event) {
    const { currentTime } = event.target as HTMLAudioElement;
    this.lastTime = currentTime;
    this.playerService.setTime(currentTime);
  }

  ngOnInit(): void {
    this.playerService.playing.subscribe((value) => {
      if (value) {
        this.audioRef.nativeElement.play();
      } else {
        this.audioRef.nativeElement.pause();
      }
    });
    this.playerService.time.subscribe((value) => {
      if (this.lastTime !== value) { this.time = value; }
    });
  }
}
