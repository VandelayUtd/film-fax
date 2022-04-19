import React, {useState} from 'react';
import MovieDropdown from '../movie-dropdown/movie-dropdown.component';

const MovieCard = (props) => {

    const [show, setShow]=useState(false);

    return (
        <div >
            <div >
                <span>{props.movie.title}</span>
                {
                    show ?
                    <div>
                        <MovieDropdown movie={props.movie}/>
                    </div> 
                    : null
                }
                <button onClick={()=> setShow(!show)}>info</button>
                <button onClick={()=> props.deleteMovie(props.movie.id)}>delete</button>
            </div>
        </div>
    );
};
export default MovieCard;