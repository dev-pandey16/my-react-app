import { useState } from 'react'
import DarkMode from './darkMode'
import './App.css'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>react Counter</h1>
    <Counter count={count} setCount={setCount} />
    <DarkMode />
    </>

  )
  
}

export default App
