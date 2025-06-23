import { useState } from 'react'
import DarkMode from './darkMode'
import './App.css'
import Counter from './counter'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>react Counter</h1>
    <Counter count={count} setCount={setCount} />
    <DarkMode />
    <TodoList />
    </>

  )
  
}

export default App
