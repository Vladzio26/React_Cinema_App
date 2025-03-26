import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

const API = 'http://localhost:4000/movies';


const MovieDetail = ({onGenreSelect, recomendation}) => {
    const[movie, setMovies] = useState(null);

    const{id} = useParams();

        useEffect(() => {
            const fetchMovie = async () => {
                try {
                    const response = await fetch(`${API}/${id}`);
                    const data = await response.json();
                    console.log(data);
                    setMovies(data);
                }
                catch (error) {
                    console.log(error);
                }
            }
            fetchMovie();
        }, [id]);

    const onSelect = (value) => {
        var valueParam = value;
        onGenreSelect(valueParam);
    }


    return (
        <div className="movie-detail">
            <img src={movie ? movie.poster_path : ''} alt={movie ? movie.title : null} />
            <h1>
                {movie ? movie.title : null}
            </h1>
            <p>
                {movie ? movie.overview : null}
            </p>
            <ul id="menu">
                {movie ? movie.genres.map((genre) => <li><input type="radio" value={genre} id={genre} onClick={(e) => onSelect(e.target.value)} name="menu-selection" /><label for={genre}>{genre}</label></li>) : null}
            </ul>
            <h1>
                Recomendations
            </h1>
            <div id="recomendations" class='d-flex d-grid gap-2'>
                {recomendation !== undefined ? recomendation.map((movie) => <MovieCard movie={movie} />) : null}
            </div>
        </div>
    );
};

export default MovieDetail;