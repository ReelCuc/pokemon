import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Main } from '../../screens/Main/Main'
import { Pokemon } from '../../screens/Pokemon/Pokemon'

export const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`
  })

  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/pokemon'>
        <Pokemon />
      </Route>
    </Switch>
  )
} 

// function Home() {
//   return <h2>Home</h2>
// }
// function Pokedex() {
//   return <h2>About</h2>
// }
// function Users() {
//   return <h2>Users</h2>
// }
      {/* <p>Вы нажали NA COCK {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button> */}