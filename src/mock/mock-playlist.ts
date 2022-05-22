import { Playlist } from "src/app/playlist";
import { mockArtist } from "./mock-artist";
import { mockMusics } from "./mock-musics";

export const mockPlaylist:Playlist = {
    name:'Lofi Loft',
    author:mockArtist,
    musics:mockMusics,
    musicsCount:mockMusics.length,
    description:'Entre e fique a vontade com lofi e chillhop',
    totalTime:mockMusics.reduce((a,b)=>{return a + b.duration }, 0),
    image:'https://i.picsum.photos/id/154/400/400.jpg?hmac=adCFz83Okci0HjLdbliSy_FVJP-8zR5iyoSof2ptVs4'
}