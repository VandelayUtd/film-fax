import React from 'react'
import { Card } from './movie-card-back.styles'


const MovieCardBack = ({movie, handleToggle}) => {

    console.log(movie)
    return (
        <Card >
                <div onClick={handleToggle}>
                    <img src={movie.image} alt={movie.title}/>
                    <span>Release Date: {movie.release_date}</span>
                    <span >Directed by {movie.director}</span>
                    <span>Starring {movie.stars}</span>
                    <span>Genres: {movie.genres}</span>
                    <p>{movie.plot}</p>
                </div>
        </Card>
    )
}

export default MovieCardBack
