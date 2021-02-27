import {
  PokemonType,
  DispatchPokemonActions,
  POKEMON_LOADING,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
} from './PokemonTypes'

interface PokemonState {
  loading: boolean
  pokemon?: PokemonType
  error?: string
}

const initialState = {
  loading: false,
  pokemon: undefined,
  error: '',
}

const pokemonReducer = (
  state: PokemonState = initialState,
  action: DispatchPokemonActions
) => {
  switch (action.type) {
    case POKEMON_LOADING: {
      return {
        loading: true,
      }
    }
    case POKEMON_FAIL: {
      return {
        loading: false,
      }
    }
    case POKEMON_SUCCESS: {
      return {
        loading: false,
        pokemon: action.payload,
      }
    }
    default:
      return state
  }
}

export default pokemonReducer
