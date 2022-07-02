import React, { Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, getInfo, getSimilarInfo } from '../../redux/actions/movieActions';
import MovieCardFront from '../movie-card-front/movie-card-front.component';
import MovieCardBack from '../movie-card-back/movie-card-back.component';
import SearchCardBack from '../search-card-back/search-card-back.component';

const MovieCard = ({movie, deleteMovie}) => {

    const [show, setShow] = useState(false);
    const [showSimilar, setShowSimilar] = useState(false);
    const dispatch = useDispatch()
    const similar = useSelector(state => state.searchedMovies.similar)

    const handleDelete = (e) => {
        deleteMovie(movie.id)
    }

    const handleToggle = () => {
        setShow(!show)
    }

    const handleSimilar = () => {
        setShowSimilar(!showSimilar)
    }

    const handleSelectSimilar = (id) => {
        dispatch(getSimilarInfo(id))
        setShowSimilar(!showSimilar)
    }


    return (
        <Fragment>
            <div>
            { 
                showSimilar ? (
                    <SearchCardBack 
                        movie={similar}
                        addMovie={dispatch(addMovie)}
                        handleInfo={()=> setShowSimilar(!showSimilar)}
                    />
                ) : show ? (
                    <MovieCardBack 
                        movie={movie}
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                        showSimilar={handleSimilar}
                        setSimilar={handleSelectSimilar}
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
