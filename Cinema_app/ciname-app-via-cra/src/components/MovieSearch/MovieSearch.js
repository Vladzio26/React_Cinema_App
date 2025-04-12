import React, { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList';


const API = 'http://localhost:4000/movies?searchBy=title';
const MovieSearch = () => {
    const inputStyle = {
        width: '1000px',
        height: '50px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        fontSize: '16px',
    };

    const styleButton = {
        width: '100px',
        height: '50px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const[sortBy, setSortBy] = useState("releaseDate");
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
            <div className="d-flex flex-column align-items-center gap-2 mb-3 justify-content-center">
                <h1>Find Your Movie</h1>
                <div>
                    <input type="text" style={inputStyle} placeholder="Search for a movie" onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="submit" style={styleButton} onClick={() => onSearch(searchTerm)}>Search</button>
                </div>
            </div>
            <div class="d-flex flex-row flex-wrap gap-2">
            <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default MovieSearch;