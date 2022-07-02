import React, { Fragment, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/actions/movieActions';
import MovieCardFront from '../movie-card-front/movie-card-front.component';
import MovieCardBack from '../movie-card-back/movie-card-back.component';
import SearchCardBack from '../search-card-back/search-card-back.component';

const MovieCard = ({movie, deleteMovie}) => {

    const [show, setShow] = useState(false);
    const [showSimilar, setShowSimilar] = useState(false);
    const [similar, setSimilar] = useState(null)
    const dispatch = useDispatch()

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
                showSimilar ? (
                    <SearchCardBack 
                        movie={similar}
                        addMovie={dispatch(addMovie)}
                        handleInfo={setShowSimilar}
                    />
                ) : show ? (
                    <MovieCardBack 
                        movie={movie}
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                        showSimilar={setShowSimilar}
                        setSimilar={setSimilar}
                    /> 
                ) : (
                    <MovieCardFront 
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
