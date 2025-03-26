import {  useState } from 'react'
import './App.css'
import CounterComponent from './components/CounterComponent.jsx'
import MovieSearch from './components/MovieSearch.jsx'
import MovieDetail from './components/MovieDetail.jsx'
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  
  var contextForButton = {
    text1: "Increment count by 1",
    text2: "Decrement count by 1"
  }
  return (
    <>
    <BrowserRouter>
      <NavLink to="/search">Go back to search</NavLink>
  
      <h1>Count is {count}</h1>
      <div className="card">
          <CounterComponent text={contextForButton.text1} setCount={setCount} />
          <CounterComponent text={contextForButton.text2} setCount={setCount} />
      </div>
      <div className="card">
       
        
          <Routes>
            <Route path="/search" element={<MovieSearch/>} />
            <Route path="/details/:id" element={<MovieDetail/>} />
          </Routes>
       
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
