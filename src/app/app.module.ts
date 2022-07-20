import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PlayerService } from './player.service';
import { appRoutingModule } from './app.routing';
import { AudioComponent } from './audio/audio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionComponent } from './session/session.component';
import { DevPageComponent } from './dev-page/dev-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListLinkComponent } from './list-link/list-link.component';
import { MusicItemComponent } from './music-item/music-item.component';
import { UserButtonComponent } from './user-button/user-button.component';
import { MiniPlayerComponent } from './mini-player/mini-player.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ArtistItemComponent } from './artist-item/artist-item.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { NavComponent } from './nav/nav.component';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { MiniMusicItemComponent } from './mini-music-item/mini-music-item.component';
import { ArtistsSessionComponent } from './artists-session/artists-session.component';
import { MusicVerticalItemComponent } from './music-vertical-item/music-vertical-item.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModalComponent } from './modal/modal.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';
import { MusicsRowComponent } from './musics-row/musics-row.component';
import { MusicsColsComponent } from './musics-cols/musics-cols.component';
import { MePageComponent } from './me-page/me-page.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { TermsOfUsePageComponent } from './terms-of-use-page/terms-of-use-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    NavbarComponent,
    SessionComponent,
    DevPageComponent,
    ListLinkComponent,
    HomePageComponent,
    MusicItemComponent,
    MusicItemComponent,
    LoginPageComponent,
    UserButtonComponent,
    MiniPlayerComponent,
    PlayerPageComponent,
    ArtistPageComponent,
    ArtistItemComponent,
    SearchPageComponent,
    NavComponent,
    ExplorePageComponent,
    PlaylistPageComponent,
    MiniMusicItemComponent,
    ArtistsSessionComponent,
    MusicVerticalItemComponent,
    ModalComponent,
    VerticalNavComponent,
    MusicsRowComponent,
    MusicsColsComponent,
    MePageComponent,
    LoginButtonComponent,
    PrivacyPolicyPageComponent,
    TermsOfUsePageComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    PlayerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
