import React from 'react'

export default function MovieDetails(props) {

    const movieCard = (
        <div>
            <img src={props.movie.image} alt="movie poster" width="128" height="176"/> 
                <ul>
                    <li>{props.movie.plot}</li>
                    <li>Release Date: {props.movie.release_date}</li>
                    <li>Directed by {props.movie.director}</li>
                    <li>Starring {props.movie.stars}</li>
                    <li>Genres: {props.movie.genres}</li>
                </ul>
        </div>
        
    )

    return (
        <div>
            {movieCard}
        </div>
    )
}
