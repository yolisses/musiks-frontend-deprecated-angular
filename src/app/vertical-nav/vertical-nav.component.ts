import { Component } from '@angular/core';
import { navList } from '../nav-list';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent {

  constructor() { }

  navList=navList

}
