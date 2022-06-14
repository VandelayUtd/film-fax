import { useState } from 'react';
import SearchCardFront from '../search-card-front/search-card-front.component';
import SearchCardBack from '../search-card-back/search-card-back.component';
import {  ResultCard } from './search-card.styles';

const SearchCard = ({ movie, getInfo, addMovie, movieInfo }) => {

    const [showInfo, setShowInfo] = useState(false)

    //write a function to itterate through movieInfo array to check if the specified movie already has its correlated info in state

    const handleInfo = (movieId) => {
        // use function from above here 
        getInfo(movieId)
        setShowInfo(!showInfo)
    }

    
    return (
        <>
            <ResultCard key={movie.id}>
                { !showInfo ? (
                        <SearchCardFront movie={movie} handleInfo={handleInfo} addMovie={addMovie} />
                    )
                    :
                    (
                        <SearchCardBack movie={movie} handleInfo={handleInfo} addMovie={addMovie} movieInfo={movieInfo} />
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