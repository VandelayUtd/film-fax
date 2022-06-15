import { useState } from 'react';
import SearchCardFront from '../search-card-front/search-card-front.component';
import SearchCardBack from '../search-card-back/search-card-back.component';
import {  ResultCard } from './search-card.styles';

const SearchCard = ({ movie, getInfo, addMovie, movieInfo }) => {

    const [showInfo, setShowInfo] = useState(false)
    const [currentMovie, setCurrentMovie] = useState(null)

    //write a function to itterate through movieInfo array to check if the specified movie already has its correlated info in state
    // const checkStateForMovie = (movieId) => {
    //     movieInfo.find(movie => movie.id === movieId)
    // }

    const handleInfo = (movieId) => {
        // use function from above here 
        // const movie = movieInfo.find(movie => movie.id === movieId)
        // if (movie) {
        //     console.log(movie)
        //     setCurrentMovie(movie)
        //     setShowInfo(!showInfo)
        // } else {
            getInfo(movieId)
            console.log(movieInfo)
            setCurrentMovie(movieInfo[movieInfo.length-1])
            setShowInfo(!showInfo)
        // }
    }

    
    return (
        <>
            <ResultCard key={movie.id}>
                { !showInfo ? (
                        <SearchCardFront movie={movie} handleInfo={handleInfo} addMovie={addMovie} />
                    )
                    :
                    (
                        <SearchCardBack movie={currentMovie} handleInfo={handleInfo} addMovie={addMovie} movieInfo={movieInfo} />
                    )
                }
            </ResultCard>
        </>
    )
}
export default SearchCard;


                            // {/* <div>
                            //     { movie.similars.length > 0 &&
                            //         movie.similars.map(movie => (
                            //             <span>{movie.title}</span>
                            //         ))
                            //     }
                            // </div> */}