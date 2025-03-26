import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = ({movie : {title, poster_path, genres, id}}) => {
    return (
        <div class="d-flex flex-row border border-danger">
            <div>
                <div>{title ? title : null }</div>
                <img src={poster_path ? poster_path : 'https://placehold.co/400'} alt={title} />
                <div>{genres ? genres.join(", ") : null}</div>
                <Link to={`/details/${id}`} > More details</Link>
            </div>
        </div>
    );
};

export default MovieCard;