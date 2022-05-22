import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  w = window.innerWidth
  md =this.w > 768
  
  @HostListener('window:resize')
  onResize() {
    this.w = window.innerWidth;
    this.md =this.w > 768
  }
}
