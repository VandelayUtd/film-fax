import React from 'react'
import { Card } from './movie-card-back.styles'


const MovieCardBack = ({movie, handleToggle}) => {


    return (
        <Card >
                <div onClick={handleToggle}>
                    <img src={movie.image}/>
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