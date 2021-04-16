import { Dispatch } from 'redux'
import {
  DispatchPokemonActions,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
} from './PokemonTypes'
import axios from 'axios'

export const getPokemon = (pokemon: string) => async (
  dispatch: Dispatch<DispatchPokemonActions>
) => {
  try {
    dispatch({
      type: POKEMON_LOADING,
    })

    const pokemonAPI = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    )

    dispatch({
      type: POKEMON_SUCCESS,
      payload: pokemonAPI.data,
    })
  } catch (error) {
    console.log('ERROR >>> ', error)
    dispatch({
      type: POKEMON_FAIL,
    })
  }
}
