import React, {useState} from 'react';
import MovieDropdown from '../movie-dropdown/movie-dropdown.component';

import { Card, Title, Image, Footer, Button} from './movie-card.styles';

const MovieCard = ({movie, deleteMovie}) => {

    const [show, setShow]=useState(false);

    return (
        <Card >
                <img src={movie.image} />
                {/* {
                    show ?
                    <div>
                        <MovieDropdown movie={movie}/>
                    </div> 
                    : null
                } */}
                <br/>
                <span>{movie.title}</span>
                <Footer>
                    <button onClick={()=> setShow(!show)}>info</button>
                    <button onClick={()=> deleteMovie(movie.id)}>delete</button>
                </Footer>

        </Card>
    );
};
export default MovieCard;