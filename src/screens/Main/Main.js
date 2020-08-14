import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
      {count}
      <Link to='/pokemon'>Покемон</Link>
    </div>
  )
}