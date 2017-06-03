import { Component , OnInit } from '@angular/core';
import { Hero } from './hero';

import {HeroService} from "./hero.service";

import {RouterModule , Router} from "@angular/router"

// export class Hero {
//   id: number;
//   name: string;
// }




@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html' ,
  styleUrls:['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  ngOnInit() : void {
    this.getHeroes();
  }


  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService , private router:Router) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);

    // this.heroService.getHeroesSlow()
    //   .then(heroes => this.heroes = heroes);

  }
  onsSelect(hero: Hero):void {
    this.selectedHero = hero;
  }

  gotoDetail():void {
    this.router.navigate(['/detail' , this.selectedHero.id]);
  }

}
