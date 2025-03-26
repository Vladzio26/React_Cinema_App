import {  useState } from 'react'

import CounterComponent from './components/CounterComponent/CounterComponent.js'
import MovieSearch from './components/MovieSearch/MovieSearch.js'
import MovieDetail from './components/MovieDetail/MovieDetail.js'
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
const API = 'http://localhost:4000/movies';

function App() {
  const [count, setCount] = useState(0)
  const[recomendation, setRecomendation] = useState(["Fantasy"]);

  var contextForButton = {
    text1: "Increment count by 1",
    text2: "Decrement count by 1"
  }

  const onGenreSelect = async (title) => {
    try {
        const response = await fetch(`${API}?search=${title}&searchBy=genres`);
        const data = await response.json();
        console.log(data);
        setRecomendation(data.data);
    }
    catch (error) {
        console.log(error);
    }
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
            <Route path="/details/:id" element={<MovieDetail onGenreSelect={onGenreSelect} setRecomendation={setRecomendation} recomendation={recomendation} />} />
          </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App