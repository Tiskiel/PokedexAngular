import { Component } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';
import { Pokemon } from 'src/app/shared/models/Pokemon.model';
import { PokemonFirst } from 'src/app/shared/models/PokemonFirst.model';
import { Result } from 'src/app/shared/models/Result.model';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styleUrls: ['./liste-pokemon.component.scss']
})
export class ListePokemonComponent {

  listePokemon!: PokemonFirst[]
  result!: Result
  isLoad: boolean = false
  acc: number = 1

  constructor(
    private pokeService: PokeAPIService
  ) { }

  ngOnInit(): void {
    this.pokeService.isCurrentListPokemon.subscribe({
      next: (data: string) => {
        this.pokeService.getFirstResult(data).subscribe({
          next: (data: Result) => {
            console.log(data.next);
            this.result = data
            this.listePokemon = data.results
            this.isLoad = true
          }
        })
      }
    })
  }

  showPokemon(url: string) {
    this.pokeService.showPokemon(url)
  }

  nextPage(url: string | null | undefined) {
    if (url !== null && url !== undefined) {
      this.pokeService.nextPage(url)
      this.acc++
    }

  }

  previousPage(url: string | null | undefined) {
    if (url !== null && url !== undefined) {
      this.pokeService.previousPage(url)
      this.acc--
    }
  }

}
