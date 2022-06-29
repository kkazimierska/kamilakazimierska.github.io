import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {
  heros: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id=${hero.id}')
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heros = heroes);
  }

}
