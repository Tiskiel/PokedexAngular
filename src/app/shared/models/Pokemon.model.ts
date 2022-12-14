import { PokemonFirst } from "./PokemonFirst.model"
import { Sprites } from "./Sprites.model"

export interface Pokemon {
    forms: PokemonFirst[]
    height: number
    weight: number
    sprites: Sprites
}
