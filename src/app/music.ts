import { Artist } from './artist';

export interface Music {
  url:string
  name: string
  image: string
  artist: Artist
  lyrics?:string
  duration: number
  visualizations:number
}
