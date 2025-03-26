import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=560d0756';
const MovieSearch = () => {
    const[searchTerm, setSearchTerm] = useState("");
    const[movies, setMovies] = useState([]);
    useEffect(() => {
        onSearch("batman");
    }, []);

    const onSearch = async (title) => {
        try {
            const response = await fetch(`${API}&s=${title}}`);
            const data = await response.json();
            console.log(data.Search);
            setMovies(data.Search);
        }
        catch (error) {
            console.log(error);
        }

    }
    

    return (
        <div>
            <h1>Movie Search</h1>
            <font>
                <input type="text" placeholder="Search for a movie" onChange={(e) => setSearchTerm(e.target.value)} />
                <button type="submit" onClick={() => onSearch(searchTerm)}>Search</button>
            </font>
            <div>
                {movies.length > 0 ? movies.map((movie) => <MovieCard movie={movie} />) : <p>No movies found</p>}
            </div>
        </div>
    );
};

export default MovieSearch;