import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

import { Hero } from './hero';
import { HEROES } from "./mock-heros";
import { Observable, of, tap } from "rxjs";
import { catchError } from "rxjs/operators";
import {MessageService} from "./message.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
    getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // TODO: Study more
      console.error(error);
      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');
      // Let the app keep running by returning an empty result.
      return of(result as T);

    };
  }

}
