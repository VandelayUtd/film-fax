import { useState } from 'react';
import {  ResultCard, ButtonContainer, TextArea} from './search-results.styles';

const SearchResults = ({ searchedMovies, getInfo, addMovie }) => {

    const [showInfo, setShowInfo] = useState(false)

    const handleInfo = (movieId) => {
        console.log('hit')
        getInfo(movieId)
        setShowInfo(!showInfo)
    }

    
    return (
        <>
                {
                    searchedMovies.map(movie => (
                    <ResultCard key={movie.id}>
                        <img src={movie.image} alt={movie.title}/>
                        <div>
                            <TextArea>
                                <span>{movie.title}</span>
                                <span>{movie.details}</span>
                            </TextArea>
                            <br/>
                            <ButtonContainer>
                                <button onClick={()=> handleInfo(movie.id)} >info</button>
                                <button onClick={()=> addMovie(movie)}>add</button>
                            </ButtonContainer>
                        </div>
                        
                    </ResultCard>
                ))        
                }
        </>
    )
}
export default SearchResults;


                            // {/* <div>
                            //     { movie.similars.length > 0 &&
                            //         movie.similars.map(movie => (
                            //             <span>{movie.title}</span>
                            //         ))
                            //     }
                            // </div> */}