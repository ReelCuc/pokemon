import { all } from 'redux-saga/effects'

import { watchPokemonSaga } from './pokemon/pokemon.saga'

export function* rootSaga() {
  yield all([watchPokemonSaga()])
}