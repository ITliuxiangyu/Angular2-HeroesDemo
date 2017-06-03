import {Injectable} from "@angular/core";

import {Hero} from "./hero";
import {HEROES} from "./mock-heros";
// import Promise = promise.Promise;

@Injectable()
export class HeroService {
  getHeroes(): Promise <Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlow(): Promise <Hero[]> {
    return new Promise (resolve => {
      setTimeout(() => resolve(this.getHeroes()) , 2000);
    });
  }

  getHero(id:number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
