import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import { Hero } from '../interfaces/Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES) as Observable<Hero[]>;
  }

  getHeroe(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero) as Observable<Hero>;
  }

}
