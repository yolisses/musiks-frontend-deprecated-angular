import { Component } from '@angular/core';
import { faBell, faChevronRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { mockArtist } from 'src/mock/mock-artist';

@Component({
  selector: 'app-me-page',
  templateUrl: './me-page.component.html',
  styleUrls: ['./me-page.component.css']
})
export class MePageComponent {
  faBell=faBell
  faGear=faGear
  faChevronRight=faChevronRight
  me=mockArtist
}
