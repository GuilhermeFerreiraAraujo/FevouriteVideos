import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'rock'],
        name: 'rock',
        moduleId: './views/rock/rock',
        nav: true,
        title: 'Rock'
      },
      {
        route: 'metal',
        name: 'metal',
        moduleId: './views/metal/metal',
        nav: true,
        title: 'Metal'
      },
      {
        route: 'hip-hop',
        name: 'hip-hop',
        moduleId: './views/hip-hop/hip-hop',
        nav: true,
        title: 'Hip Hop'
      }, 
      {
        route: 'reggae',
        name: 'raggae',
        moduleId: './views/reggae/reggae',
        nav: true,
        title: 'Reggae'
      },
      {
        route: 'drum-and-bass',
        name: 'drum-and-bass',
        moduleId: './views/drum-and-bass/drum-and-bass',
        nav: true,
        title: 'Drum and Bass'
      },
      {
        route: 'punk-rock',
        name: 'punk-rock',
        moduleId: './views/punk-rock/punk-rock',
        nav: true,
        title: 'Punk Rock'
      }
    ]);

    this.router = router;
  }
}
