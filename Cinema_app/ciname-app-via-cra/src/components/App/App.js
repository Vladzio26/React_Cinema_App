import {  useState } from 'react'

import CounterComponent from '../CounterComponent/CounterComponent.js'
import MovieSearch from '../MovieSearch/MovieSearch.js'
import MovieDetail from '../MovieDetail/MovieDetail.js'
import MovieForm from '../MovieForm/MovieForm.js'
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
      <div>
        <NavLink to="/search">Go back to search</NavLink>
        /_______/
        <NavLink to="/add-movie">Go to add a new movie</NavLink>
      </div>
      <div className="card">
          <CounterComponent text={contextForButton} setCount={setCount} count={count} />
      </div>
      <div className="card">
          <Routes>
            <Route path="/add-movie" element={<MovieForm/>} />
            <Route path="/search" element={<MovieSearch/>} />
            <Route path="/details/:id" element={<MovieDetail onGenreSelect={onGenreSelect} setRecomendation={setRecomendation} recomendation={recomendation} />} />
          </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App