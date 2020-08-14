import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR
 } from './pokemon.actions'

const initialState = {
  pokemon: null,
  pokemons: [],
  isLoading: false,
  error: null
}

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return { ...state, isLoading: true }
      
    case GET_POKEMON_SUCCESS:
      return { ...state, pokemon: action.pokemon.data, isLoading: false }

    case GET_POKEMON_ERROR:
      return { ...state, isLoading: false, error: action.error }

    case GET_POKEMONS_REQUEST:
      return { ...state, isLoading: true }
      
    case GET_POKEMONS_SUCCESS:
      return { ...state, pokemons: [...state.pokemons, ...action.pokemons.data.results], isLoading: false }

    case GET_POKEMONS_ERROR:
      return { ...state, isLoading: false, error: action.error }

    default:
      return state
  }
}