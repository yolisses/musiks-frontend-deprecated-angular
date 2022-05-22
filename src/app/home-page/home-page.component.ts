import { Component } from '@angular/core';
import { faBell, faGear, faHeadphones, faHistory } from '@fortawesome/free-solid-svg-icons';
import { mockMusics } from '../../mock/mock-musics';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  faGear = faGear
  faBell = faBell
  musics = mockMusics;
  faHistory = faHistory
  faHeadphones = faHeadphones
  categories = ['Relax','Energia','Em trânsito','Treino','Foco']
}
