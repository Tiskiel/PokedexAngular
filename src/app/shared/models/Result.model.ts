import { PokemonFirst } from "./PokemonFirst.model"

export interface Result {
    count: number
    next?: string
    previous?: string
    results: PokemonFirst[]
}
