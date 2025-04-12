import React from "react";

import { useState } from "react";

const MovieForm = () => {
    
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [genres, setGenres] = useState([]);
    const [rating, setRating] = useState(0);
    const [trailer, setTrailer] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [duration, setDuration] = useState(0);
    

    const movie = {
        //id: +id,
        title: title,
        overview: description,
        poster_path: image,
        genres: genres,
        vote_count: +rating,
        tagline: trailer,
        release_date: releaseDate,
        runtime: +duration,
    };

const createMovie = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:4000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Movie created successfully:", data);
        }
    } catch (error) {
        console.error("Error creating movie:", error);
    }
}
    
        return (
            <>
            <form className="form-group" onSubmit={(e) => createMovie(e)}> 
                
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" required onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Enter description" required onChange={(e)=>setDescription(e.target.value)}/>
                <label htmlFor="image">Image</label>
                <input type="text" className="form-control" id="image" name="image" placeholder="Enter image URL" required onChange={(e)=>setImage(e.target.value)}/>
                <label htmlFor="genres">Genres</label>
                <label htmlFor="rating">Rating</label>
                <input type="number" className="form-control" id="rating" name="rating" placeholder="Enter rating" required onChange={(e)=>setRating(e.target.value)}/>
                <label htmlFor="trailer">Trailer</label>
                <input type="text" className="form-control" id="trailer" name="trailer" placeholder="Enter trailer URL" required onChange={(e)=>setTrailer(e.target.value)}/>
                <label htmlFor="releaseDate">Release Date</label>
                <input type="date" className="form-control" id="releaseDate" name="releaseDate" placeholder="Enter release date" required onChange={(e)=>setReleaseDate(e.target.value)}/>
                <label htmlFor="duration">Duration</label>
                <input type="number" className="form-control" id="duration" name="duration" placeholder="Enter duration in minutes" required onChange={(e)=>setDuration(e.target.value)}/>
                <input type="text" className="form-control" id="genres" name="genres" placeholder="Enter genres (comma separated)" required onChange={(e)=>setGenres(e.target.value.split(','))}/>
                <button type="submit" className="btn btn-success mt-3">Submit</button>
                <button type="submit" className="btn btn-primary mt-3">Update</button>

            </form>
            </>
        )
};

export default MovieForm;