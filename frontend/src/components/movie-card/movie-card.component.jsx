import React, {useState} from 'react';
import MovieDropdown from '../movie-dropdown/movie-dropdown.component';

import { CardContainer, Title } from './movie-card.styles';

const MovieCard = ({movie, deleteMovie}) => {

    const [show, setShow]=useState(false);

    return (
        <CardContainer >
            <div >
                <Title>{movie.title}</Title>
                {
                    show ?
                    <div>
                        <MovieDropdown movie={movie}/>
                    </div> 
                    : null
                }
                <br/>
                <button onClick={()=> setShow(!show)}>info</button>
                <button onClick={()=> deleteMovie(movie.id)}>delete</button>
            </div>
        </CardContainer>
    );
};
export default MovieCard;