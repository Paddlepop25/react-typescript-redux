import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon } from '../store/Pokemon/PokemonActions'
import { RootState } from '../store/rootReducer'
import Header from './Header'
import { Box } from '../styles/styledTheme'
import { PokemonInputStyle } from '../store/Pokemon/PokemonStyles'

const Pokemon = () => {
  const dispatch = useDispatch()

  const [pokemonInput, setPokemonInput] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonInput(event.target.value)
  }

  const handleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    dispatch(getPokemon(pokemonInput))
    setPokemonInput('')
  }

  const pokemonState = useSelector((state: RootState) => state.pokemon)
  console.log(pokemonState)
  const pokemonLoading = pokemonState.loading
  const pokemonData = pokemonState.pokemon
  const pokemonFail = pokemonState.error
  console.log('IMG', pokemonData?.sprites.front_default)
  return (
    <>
      <Header />
      <Box>
        <PokemonInputStyle
          type='text'
          value={pokemonInput}
          onChange={handleChange}
          placeholder='      🦖...'
        />
        &nbsp;
        <button onClick={handleSearch}>🔍</button>
        <hr />
        {pokemonData && (
          <>
            <h2>
              {pokemonData.name.toUpperCase()} - {pokemonData.id}
            </h2>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
            <img
              src={pokemonData.sprites.back_default}
              alt={pokemonData.name}
            />
            <h3>Abilities:</h3>
            {pokemonData.abilities.map((abilities) => {
              return (
                <div key={abilities.ability.name}>
                  <p>
                    Name: <code>{abilities.ability.name}</code> | Url:{' '}
                    <code>{abilities.ability.url}</code>
                  </p>
                </div>
              )
            })}
            <h3>Stats:</h3>
            {pokemonData.stats.map((stat) => {
              return (
                <div key={stat.stat.name}>
                  <p>
                    Base stat: {stat.base_stat} | Power: {stat.stat.name}
                  </p>
                </div>
              )
            })}
          </>
        )}
      </Box>
    </>
  )
}

export default Pokemon
