import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getPokemon, getPokemons } from '../../store/pokemon/pokemon.actions'

import'./Pokemon.css'

export const Pokemon = () => {
  const dispatch = useDispatch()
  const { pokemon, pokemons, isLoading } = useSelector(store => store.pokemon)

  const fetchPokemon = () => dispatch(getPokemon(1))
  const fetchPokemons = () => dispatch(getPokemons(25))

  if (isLoading) {
    return 'Покемоны скачиваются...'
  }

  return (
    <div className='pokemon'> 
      <Link to='/'>Домой</Link>
      <button onClick={fetchPokemon}>Получить покемона</button>
      <button onClick={fetchPokemons}>Получить покемонов</button>
      {pokemon && pokemon.name}
      {pokemons && 
        <div className='pokemon__items'>
          {pokemons.map(pokemon => <div>{pokemon.name}</div>)}
        </div>
      }
    </div>
  )
}