import { Component } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';
import { Pokemon } from 'src/app/shared/models/Pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemon!: Pokemon
  officialImg!: string
  isLoad: boolean = false
  constructor(
    private pokeService: PokeAPIService
  ) { }

  ngOnInit(): void {
    this.pokeService.isCurrentPokemon.subscribe({
      next: (data: string) => {
        this.pokeService.getOnePokemon(data).subscribe({
          next: (data: Pokemon) => {
            this.pokemon = data
            this.isLoad = true
            this.officialImg = this.pokemon.sprites.other["official-artwork"].front_default
          }
        })
      }
    })
  }
}
