import { Component } from '@angular/core';
import { faBars, faChevronDown, faComment, faDownload, faEllipsisV, faHeart, faListDots, faSearch, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import { mockMusics } from 'src/mock/mock-musics';
import { Music } from '../music';
import { navList } from '../nav-list';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent {
  music:Music = mockMusics[0]
  faStar=faStar
  faBars=faBars
  faHeart=faHeart
  faShare=faShare
  faSearch=faSearch
  faComment=faComment
  faDownload=faDownload
  faEllipsisV=faEllipsisV
  faChevronDown=faChevronDown

  navList=navList
}
