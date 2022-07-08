import React, { Fragment, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, getSimilarInfo, deleteMovie } from '../../redux/actions/movieActions';
import MovieCardFront from '../movie-card-front/movie-card-front.component';
import MovieCardBack from '../movie-card-back/movie-card-back.component';
import SearchCardBack from '../search-card-back/search-card-back.component';

const MovieCard = ({ movie }) => {

    const [show, setShow] = useState(false);
    const [showSimilar, setShowSimilar] = useState(false);
    const dispatch = useDispatch()
    const similar = useSelector(state => state.movies.similar)


    const handleDelete = (movieId) => {
        dispatch(deleteMovie(movieId))
    }

    const handleToggle = () => {
        setShow(!show)
    }

    const handleSimilar = () => {
        setShowSimilar(!showSimilar)
    }

    const handleSelectSimilar = async id => {
        console.log("1")
        await new Promise((resolve, reject)=> {
            dispatch(getSimilarInfo(id))
            resolve()
            console.log("2")
        })
        console.log("3")
        setShowSimilar(!showSimilar)
    }

    const handleAdd = (movie) => {
        dispatch(addMovie(movie))
    }
    


    return (
        <Fragment>
            <div>
            { 
                showSimilar ? (
                    <SearchCardBack 
                        movie={similar}
                        addMovie={handleAdd}
                        setShowInfo={()=> setShowSimilar(!showSimilar)}
                    />
                ) : show ? (
                    <MovieCardBack 
                        movie={movie}
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                        showSimilar={handleSimilar}
                        handleSelectSimilar={handleSelectSimilar}
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
