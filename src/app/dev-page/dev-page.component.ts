import { Component } from '@angular/core';
import { mockMusics } from 'src/mock/mock-musics';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.css']
})
export class DevPageComponent {
  Array= Array
  mockMusics = mockMusics
}
