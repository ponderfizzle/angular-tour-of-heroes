import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/Hero';
import { HEROES } from '../../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
    this.heroes = HEROES;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
