import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';


const MovieList = ({movies, sortBy}) => {
    const handleClick = (movie) => {
        console.log("Button clicked!");
    }
    
    const handleSortChange = (sortBy) => {
        console.log("Selected sort:", sortBy);
        // Implement sorting logic here if needed
    };
    return (
    <>
        <SortControl currentSort={sortBy} handleSortChange={handleSortChange} />
        {movies !== undefined ? movies.map((movie) => <MovieTile movie={movie}  onClick={handleClick} />) : null}
    </>
    );
};

export default MovieList;