import {  useState } from 'react'

import CounterComponent from './components/CounterComponent/CounterComponent.js'
import MovieSearch from './components/MovieSearch/MovieSearch.js'
import MovieDetail from './components/MovieDetail/MovieDetail.js'
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
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
      <div className="card">
          <CounterComponent text={contextForButton} setCount={setCount} count={count} />
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