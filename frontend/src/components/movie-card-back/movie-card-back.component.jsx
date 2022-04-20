import React from 'react'
import { Card } from './movie-card-back.styles'


const MovieCardBack = ({movie}) => {


    return (
        <Card >
                <div>
                    <span>{movie.plot}</span>
                    <span>Release Date: {movie.release_date}</span>
                    <span style={{color: 'white'}}>Directed by {movie.director}</span>
                    <span>Starring {movie.stars}</span>
                    <span>Genres: {movie.genres}</span>
                </div>
        </Card>
    )
}

export default MovieCardBack
