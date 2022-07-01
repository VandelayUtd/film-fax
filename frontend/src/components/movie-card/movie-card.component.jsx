import React, { Fragment, useState} from 'react';
import MovieCardFront from '../movie-card-front/movie-card-front.component';
import MovieCardBack from '../movie-card-back/movie-card-back.component';

const MovieCard = ({movie, deleteMovie}) => {

    const [show, setShow] = useState(false);

    const handleDelete = (e) => {
        deleteMovie(movie.id)
    }

    const handleToggle = () => {
        setShow(!show)
    }

    return (
        <Fragment>
            <div>
            { 
                !show ? (
                    <MovieCardFront 
                        movie={movie} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                    />
                ) : (
                    <MovieCardBack 
                        movie={movie}
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                    />
                )
            }
            </div>
        </Fragment>


    );
};
export default MovieCard;
