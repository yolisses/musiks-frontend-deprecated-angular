import {RouterModule, Routes} from '@angular/router';
import {DevPageComponent} from './dev-page/dev-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PlayerPageComponent} from './player-page/player-page.component';
import {ExplorePageComponent} from './explore-page/explore-page.component';
import {ArtistPageComponent} from './artist-page/artist-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {PlaylistPageComponent} from './playlist-page/playlist-page.component';
import {MePageComponent} from './me-page/me-page.component';
import {TermsOfUsePageComponent} from "./terms-of-use-page/terms-of-use-page.component";
import {PrivacyPolicyPageComponent} from "./privacy-policy-page/privacy-policy-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'me', component: MePageComponent},
  {path: 'dev', component: DevPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'player', component: PlayerPageComponent},
  {path: 'explore', component: ExplorePageComponent},
  {path: 'artist/:id', component: ArtistPageComponent},
  {path: 'playlist/:id', component: PlaylistPageComponent},
  {path: 'terms-of-use', component: TermsOfUsePageComponent},
  {path: 'privacy-policy', component: PrivacyPolicyPageComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''},
];

export const appRoutingModule = RouterModule.forRoot(routes);
