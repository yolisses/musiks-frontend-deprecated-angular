import { Component, OnInit } from '@angular/core';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  background_image = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80'
  faHeadphones = faHeadphones

  constructor() { }

  ngOnInit(): void {
  }

}
