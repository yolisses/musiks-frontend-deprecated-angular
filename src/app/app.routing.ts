import { Routes, RouterModule } from '@angular/router';
import { DevPageComponent } from './dev-page/dev-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { MePageComponent } from './me-page/me-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'me', component: MePageComponent },
  { path: 'dev', component: DevPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'player', component: PlayerPageComponent },
  { path: 'explore', component: ExplorePageComponent },
  { path: 'artist/:id', component: ArtistPageComponent },
  { path: 'playlist/:id', component: PlaylistPageComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
