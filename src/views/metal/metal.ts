import { Song } from "src/models/shared.models";

export class Metal{
  public songs: Song[] = [{
    "name": "Master Of Puppets",
    "band": "Metallica",
    "link": "https://www.youtube.com/embed/xnKhsTXoKCI"
  },
  {
    "name": "Hallowed Be Thy Name",
    "band": "Iron Maiden",
    "link": "https://www.youtube.com/embed/J51LPlP-s9o"
  },
  {
    "name": "Holy Wars...The Punishment Due",
    "band": "Megadeth",
    "link": "https://www.youtube.com/embed/9d4ui9q7eDM"
  },
  {
    "name": "One",
    "band": "Metallica",
    "link": "https://www.youtube.com/embed/EzgGTTtR0kc"
  },
  {
    "name": "The Trooper",
    "band": "Iron Maiden",
    "link": "https://www.youtube.com/embed/dTaD9cd8hvw"
  },
  {
    "name": "Iron Man",
    "band": "Black Sabbath",
    "link": "https://www.youtube.com/embed/5s7_WbiR79E"
  },
  {
    "name": "Paranoid",
    "band": "Black Sabbath",
    "link": "https://www.youtube.com/embed/cen1SvpTsYk"
  },
  {
    "name": "Enter Sandman",
    "band": "Metallica",
    "link": "https://www.youtube.com/embed/CD-E-LDc384"
  },
  {
    "name": "Painkiller ",
    "band": "Judas Priest",
    "link": "https://www.youtube.com/embed/nM__lPTWThU"
  },
  {
    "name": "Chop Suey",
    "band": "System Of A Down",
    "link": "https://www.youtube.com/embed/CSvFpBOe8eY"
  }];

  removeSong(index){
    this.songs.splice(index, 1);
  }
}
