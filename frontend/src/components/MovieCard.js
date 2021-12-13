import React, {useState} from 'react'
import MovieDetails from './MovieDetails'

export default function MovieCard(props) {

    const [show, setShow]=useState(false)


    return (
        <div>
            <li >
                <span>{props.movie.title}</span>
                {
                    show ?
                    <div>
                        <MovieDetails movie={props.movie}/>
                    </div> 
                    : null
                }
                <button onClick={()=> setShow(!show)}>info</button>
                <button onClick={()=> props.deleteMovie(props.movie.id)}>delete</button>
            </li>
        </div>
    )
}
