import { useState } from 'react';
import SearchCardFront from '../search-card-front/search-card-front.component';
import {  ResultCard, ButtonContainer, TextArea} from './search-card.styles';

const SearchCard = ({ movie, getInfo, addMovie }) => {

    const [showInfo, setShowInfo] = useState(false)

    const handleInfo = (movieId) => {
        console.log('hit')
        getInfo(movieId)
        setShowInfo(!showInfo)
    }

    
    return (
        <>
            <ResultCard key={movie.id}>
                <SearchCardFront movie={movie} handleInfo={handleInfo} addMovie={addMovie}/>
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