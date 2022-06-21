import { useState, useRef, useEffect } from 'react';
import SearchCardFront from '../search-card-front/search-card-front.component';
import SearchCardBack from '../search-card-back/search-card-back.component';
import {  ResultCard } from './search-card.styles';

const SearchCard = ({ movie, getInfo, addMovie, movieInfo }) => {

    const [showInfo, setShowInfo] = useState(false)

    const handleInfo = (movieId) => {
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
