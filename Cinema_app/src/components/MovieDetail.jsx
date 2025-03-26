import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

const API = 'https://www.omdbapi.com/?apikey=560d0756';


const MovieDetail = () => {
    const[movies, setMovies] = useState(null);
    const[recomendation, setRecomendation] = useState([]);

    const[genre, setGenre] = useState(null);
    const[searchTerm, setSearchTerm] = useState("");

    const{id} = useParams();

        useEffect(() => {
            const fetchMovie = async () => {
                try {
                    const response = await fetch(`${API}&i=${id}`);
                    const data = await response.json();
                    console.log(data);
                    setMovies(data.Poster);
                    var genre = data.Genre.split(",");
                    setGenre(genre);
                    console.log(data.Genre)
                }
                catch (error) {
                    console.log(error);
                }
            }
            fetchMovie();
        }, [id]);



        const onSearch = async (title) => {
            try {
                const response = await fetch(`${API}&s=${title}}`);
                const data = await response.json();
                console.log(data.Search);
                setRecomendation(data.Search);
            }
            catch (error) {
                console.log(error);
            }
    
        }
        const onSelect = (value) => {
            var valueParam = value.trim();
            setSearchTerm(valueParam);
            onSearch(valueParam);
        }
    return (
        <div className="movie-detail">
           <img src={movies} alt={movies} />
            <ul id="menu">
                {genre ? genre.map((genre) => <li><input type="radio" value={genre} id={genre} onClick={(e) => onSelect(e.target.value)} name="menu-selection" /><label for={genre}>{genre}</label></li>) : null}
            </ul>

           
            {recomendation !== undefined ? recomendation.map((movie) => <MovieCard movie={movie} />) : null}
        </div>
    );
};

export default MovieDetail;