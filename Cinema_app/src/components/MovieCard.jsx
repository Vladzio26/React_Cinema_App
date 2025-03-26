import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = ({movie : {Title, Poster, Type, imdbID}}) => {
    return (
        <div>
            <h1>{Title ? Title : null }</h1>
            <img src={Poster} alt={Title} />
            <p></p>
            <p>{Type}</p>
            <Link to={`/details/${imdbID}`} > More details</Link>
        </div>
    );
};

export default MovieCard;