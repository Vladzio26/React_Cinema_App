import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dialog from '../Dialog/Dialog';

const BUTTON_STYLES = {
    position: "relative",
    zindex: 1000,

};


const MovieTile = ({movie : {title, poster_path = 'https://placehold.co/400', genres, id, release_date, onClick}}) => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div class=" border border-danger">
            <Link to={`/details/${id}`} > 
                <div>{title ? title : null }</div>
                <img src={poster_path} alt={title} onClick={onClick}/>
                <div>{release_date}</div>
                <div>{genres ? genres.join(", ") : null}</div>
            </Link>
            <div class="d-flex align-items-end flex-column">
                <button style={BUTTON_STYLES} label="..." className='bg-transparent text-dark' icon="pi pi-external-link" onClick={() => setisOpen(true)} >...</button>
            </div>
            <Dialog title={title ? title : null} open={isOpen} onClose={() => setisOpen(false)}>
                I am a modal window
            </Dialog>

        </div>
    );
};

export default MovieTile;