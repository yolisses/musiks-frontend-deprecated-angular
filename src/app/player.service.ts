import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { mockMusics } from '../mock/mock-musics';
import { Music } from './music';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  playing = new Subject<boolean>();
  music = new Subject<Music>();
  time = new Subject<number>();
  isOpen = new Subject<boolean>();

  constructor(){
    this.music.next(mockMusics[0])
  }

  open() {
    this.isOpen.next(true);
  }

  close() {
    this.isOpen.next(false);
  }

  play() {
    this.playing.next(true);
  }

  pause() {
    this.playing.next(false);
  }

  setTime(time:number) {
    this.time.next(time);
  }

  setMusic(music:Music) {
    this.time.next(0);
    this.music.next(music);
    this.playing.next(true);
  }
}
