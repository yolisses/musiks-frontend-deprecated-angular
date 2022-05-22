import { Component } from '@angular/core';
import { navList } from '../nav-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navList=navList
}
