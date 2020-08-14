export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS'
export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST'
export const GET_POKEMON_ERROR = 'GET_POKEMON_ERROR'

export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST'
export const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR'

export const getPokemon = id => ({
  type: GET_POKEMON_REQUEST,
  id
})

export const getPokemons = count => ({
  type: GET_POKEMONS_REQUEST,
  count
})