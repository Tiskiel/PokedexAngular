import { Injectable } from '@angular/core';
import { Pokemon } from '../shared/models/Pokemon.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environement';
import { Observable, BehaviorSubject } from 'rxjs';
import { Result } from '../shared/models/Result.model';


@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  currentPokemonUrl!: string
  pokeList!: Pokemon[]
  url: string = environment.URL_POKE_API

  isCurrentPokemon: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentPokemonUrl)
  isCurrentListPokemon: BehaviorSubject<string> = new BehaviorSubject<string>(this.url)

  constructor(
    private _http: HttpClient
  ) { }

  emitUrlPokemon() {
    this.isCurrentPokemon.next(this.currentPokemonUrl)
  }

  emitUrlListPokemon() {
    this.isCurrentListPokemon.next(this.url)
  }

  getFirstResult(url: string): Observable<Result> {
    return this._http.get<Result>(url)
  }

  getOnePokemon(url: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(url)
  }

  showPokemon(urlPokemon: string) {
    this.currentPokemonUrl = urlPokemon
    this.emitUrlPokemon()
  }

  nextPage(url: string) {

    this.url = url
    this.emitUrlListPokemon()


  }

  previousPage(url: string) {
    this.url = url
    this.emitUrlListPokemon()

  }
}
