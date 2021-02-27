export const POKEMON_LOADING = 'POKEMON_LOADING'
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS'
export const POKEMON_FAIL = 'POKEMON_FAIL'

export type PokemonType = {
  id: number
  name: string
  abilities: PokemonAbility[]
  sprites: PokemonSprite
  stats: PokemonStat[]
}

type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

type PokemonSprite = {
  front_default: string
  back_default: string
}

type PokemonStat = {
  base_stat: number
  stat: {
    name: string
  }
}

interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

interface PokemonFail {
  type: typeof POKEMON_FAIL
}

interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS
  payload: PokemonType
}

export type DispatchPokemonActions =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess
