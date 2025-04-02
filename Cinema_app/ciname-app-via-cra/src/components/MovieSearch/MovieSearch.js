import React, { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList';


const API = 'http://localhost:4000/movies?searchBy=title';
const MovieSearch = () => {
    //const[sortBy, setSortBy] = useState("releaseDate");
    const[searchTerm, setSearchTerm] = useState("");
    const[movies, setMovies] = useState([]);
    useEffect(() => {
        onSearch("");
    }, []);


    const handleSortChange = async (newSort, movies) => {
        console.log("Selected sort:", newSort);
       /* 
        try {
            const response = await fetch(`${API}&search=${movies}&sortBy=${newSort}`); // Doesn't work
            const data = await response.json();
            console.log(data.data);
            setSortBy(data.data);
        }
        catch (error) {
            console.log(error);
        }*/
    };

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
            <div class="d-flex flex-row flex-wrap gap-2">
            <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default MovieSearch;