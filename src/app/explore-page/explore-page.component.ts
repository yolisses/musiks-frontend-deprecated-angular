import { Component } from '@angular/core';
import { faArrowTrendUp, faCertificate, faSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css'],
})
export class ExplorePageComponent {
  faCertificate = faCertificate;

  faArrowTrendUp = faArrowTrendUp;

  faSmile = faSmile;
}
