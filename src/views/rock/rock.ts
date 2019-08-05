import { Song } from "src/models/shared.models";

export class Rock{
  public songs: Song[] = [{
    "name": "Sweet Emotion",
    "band": "Aerosmith",
    "link": "https://www.youtube.com/embed/D0EpGrvDXDM"
  },
  {
    "name": "Sweet Child O' Mine",
    "band": "Gund N' Roses",
    "link": "https://www.youtube.com/embed/jq_FWScqyG8"
  },
  {
    "name": "Comfortably numb",
    "band": "Pink Floyd",
    "link": "https://www.youtube.com/embed/_FrOQC-zEog"
  },
  {
    "name": "A day in the life",
    "band": "The Beatles",
    "link": "https://www.youtube.com/embed/yoUxyiNpvMU"
  },
  {
    "name": "Bohemian Rhapsody",
    "band": "Queen",
    "link": "https://www.youtube.com/embed/fJ9rUzIMcZQ"
  },
  {
    "name": "Don't Stop Believin",
    "band": "Journey ",
    "link": "https://www.youtube.com/embed/VcjzHMhBtf0"
  },
  {
    "name": "All Along The Watchtower",
    "band": "Jimi Hendrix",
    "link": "https://www.youtube.com/embed/TLV4_xaYynY"
  },
  {
    "name": "Like a Rolling Stone",
    "band": "Bob Dylan",
    "link": "https://www.youtube.com/embed/_-5fDg-VUxQ"
  },
  {
    "name": "Paranoid",
    "band": "Black Sabbath",
    "link": "https://www.youtube.com/embed/0qanF-91aJo"
  },
  {
    "name": "Kashmir",
    "band": "Led Zeppelin",
    "link": "https://www.youtube.com/embed/sfR_HWMzgyc"
  }];

  removeSong(index){
    this.songs.splice(index, 1);
  }
}
