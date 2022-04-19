import React from 'react'


const MovieDropdown = (props) => {

    const movieCard = (
        <div >
            <img src={props.movie.image} alt="movie poster" style={{width: 128, height: 176}}/> 
                <div>
                    <span>{props.movie.plot}</span>
                    <span>Release Date: {props.movie.release_date}</span>
                    <span>Directed by {props.movie.director}</span>
                    <span>Starring {props.movie.stars}</span>
                    <span>Genres: {props.movie.genres}</span>
                </div>
        </div>
        
    )

    return (
        <div>
            {movieCard}
        </div>
    )
}

export default MovieDropdown
