import React, {useState} from 'react'

export default function MovieCard({movie}) {

    const [show, setShow]=useState(false)

    const movieCard = (
        <div>
            <img src={movie.image} alt="movie poster"/> 
                <ul>
                                <li>{movie.plot}</li>
                                <li>Release Date: {movie.release_date}</li>
                                <li>Directed by {movie.director}</li>
                                <li>Starring {movie.stars}</li>
                                <li>Genres: {movie.genres}</li>
                </ul>
        </div>
        
    )

    return (
        <div>
            <li>
                <span>{movie.title}</span>
                {
                    show ?
                    <div>
                        {movieCard}
                    </div> 
                    : null
                }
                <button onClick={()=> setShow(!show)}>info</button>
            </li>
        </div>
    )
}
