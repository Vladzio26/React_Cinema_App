import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
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
        <div >
            <div className="movie-detail d-flex flex-row flex-wrap gap-2">
                <img src={movie ? movie.poster_path : ''} alt={movie ? movie.title : null} />
                <div className="movie-detail d-flex flex-column border border-danger"> 
                    <h1>
                        {movie ? movie.title : null}
                    </h1>
                    <p>
                        <h4>Release Date:</h4>
                        {movie ? movie.release_date : null}
                    </p>
                    <p>
                        <h4>Rating:</h4>
                        {movie ? movie.vote_average : null}
                    </p>
                    <p>
                        <h4>Runtime:</h4>
                        {movie ? movie.runtime : null}
                    </p>
                    <p>
                        <h4>Overview:</h4>
                        {movie ? movie.overview : null}
                    </p>
                    <ul id="menu" key={movie ? movie.id : null}>
                        <h4>Genres</h4>
                        {movie ? movie.genres.map((genre) => <li><input type="radio" value={genre} id={genre} onClick={(e) => onSelect(e.target.value)} name="menu-selection" /><label for={genre}>{genre}</label></li>) : null}
                    </ul>
                </div>
            </div>
            <h1>
                Recomendations
            </h1>
            <div id="recomendations" class='d-flex d-grid gap-2'>
                <MovieList movies={recomendation} />
            </div>
        </div>
    );
};

export default MovieDetail;