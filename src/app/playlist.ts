import { Artist } from "./artist";
import { Music } from "./music";

export interface Playlist{
    name:string
    image:string
    author:Artist
    musics:Music[]
    totalTime:number
    musicsCount:number
    description?:string
}