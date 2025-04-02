import React from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const MovieTile = ({movie : {title, poster_path = 'https://placehold.co/400', genres, id, release_date, onClick}}) => {
    const [visible, setVisible] = useState(false);
    return (
        <div class=" border border-danger">
            
                <Link to={`/details/${id}`} > 
                    <div>{title ? title : null }</div>
                    <img src={poster_path} alt={title} onClick={onClick} />
                    <div>{release_date}</div>
                    <div>{genres ? genres.join(", ") : null}</div>
                </Link>
                <div class="d-flex align-items-end flex-column">
                    <Button label="..." className='bg-transparent text-dark' icon="pi pi-external-link" onClick={() => setVisible(true)} />
                </div>
                <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-200"onClick={() => {}}
                >
            Edit
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-200" onClick={() => {}}>
            Delete
          </button>
                </Dialog>
            
        </div>
    );
};

export default MovieTile;