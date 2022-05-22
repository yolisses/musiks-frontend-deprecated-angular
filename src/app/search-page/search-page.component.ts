import { Component } from '@angular/core';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  faArrowLeft = faArrowLeft;
  faTimes = faTimes
  categories = [
    'Melhores resultados',
    'Playlists',
    'Músicas',
    'Podcasts e programas',
    'Artistas',
    'Álbuns',
    'Perfis',
    'Gêneros e momentos'
  ]
}
