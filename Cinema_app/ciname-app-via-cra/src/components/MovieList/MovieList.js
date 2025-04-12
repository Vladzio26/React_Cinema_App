import React, { useState } from 'react';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';


const MovieList = ({movies, sortBy}) => {
    const [visible, setVisible] = useState(false);
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
        {movies !== undefined ? movies.map((movie) => <MovieTile movie={movie} setVisible={setVisible} visible={visible}  onClick={handleClick} />) : null}
    </>
    );
};

export default MovieList;