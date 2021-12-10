import React, {useState} from 'react'
import MovieDetails from './MovieDetails'

export default function MovieCard({movie}) {

    const [show, setShow]=useState(false)


    return (
        <div>
            <li >
                <span>{movie.title}</span>
                {
                    show ?
                    <div>
                        <MovieDetails movie={movie}/>
                    </div> 
                    : null
                }
                <button onClick={()=> setShow(!show)}>info</button>
            </li>
        </div>
    )
}
