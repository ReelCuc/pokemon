import { takeLatest, call, put } from 'redux-saga/effects'

import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR
 } from './pokemon.actions'

import { API } from '../../core/api'

function* getPokemon(action) {
  try {
    const pokemon = yield call(API.get, `pokemon/${action.id}`)

    yield put({ type: GET_POKEMON_SUCCESS, pokemon })
  } catch (error) {
    yield put({ type: GET_POKEMON_ERROR, error })

    console.error(error)
  }
}

function* getPokemons(action) {
  try {
    const pokemons = yield call(API.get, `pokemon?limit=${action.count}&offset=200`)

    yield put({ type: GET_POKEMONS_SUCCESS, pokemons })
  } catch (error) {
    yield put({ type: GET_POKEMONS_ERROR, error })

    console.error(error)
  }
}

export function* watchPokemonSaga() {
  yield takeLatest(GET_POKEMON_REQUEST, getPokemon)
  yield takeLatest(GET_POKEMONS_REQUEST, getPokemons)

}