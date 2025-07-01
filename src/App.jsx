import { useState } from 'react'
import DarkMode from './darkMode'
import './App.css'
import Counter from './counter'
import TodoList from './TodoList'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './pages/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
import Auth from './pages/auth'
import { Posts } from './pages/posts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className = "text-lg text-9xl bg-amber-950">react Counter</h1>
    {/* <Counter count={count} setCount={setCount} />
    <DarkMode />
    <TodoList /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:id" element={<User />} />
      <Route path = "/Movies" element = {<Movies />} />
      <Route path = "/Counter" element = {<Counter />} />
      <Route path = "/Auth" element = {<Auth />} />
      <Route path = "/posts" element = {<Posts />} />
      <Route path = "*" element = {<NotFound />} />
    </Routes>
    </BrowserRouter> 
    </>

  )
  
}

export default App
