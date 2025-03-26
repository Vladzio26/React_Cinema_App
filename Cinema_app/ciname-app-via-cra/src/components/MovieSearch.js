import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';


const API = 'http://localhost:4000/movies?searchBy=title';
const MovieSearch = () => {
    const[searchTerm, setSearchTerm] = useState("");
    const[movies, setMovies] = useState([]);
    useEffect(() => {
        onSearch("");
    }, []);

    const onSearch = async (title) => {
        try {
            const response = await fetch(`${API}&search=${title}`);
            const data = await response.json();
            console.log(data.data);
            setMovies(data.data);
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
                {movies ? movies.map((movie) => <MovieCard movie={movie} />) : <p>No movies found</p>}
            </div>
        </div>
    );
};

export default MovieSearch;