import { useState, useRef, useEffect } from 'react';
import SearchCardFront from '../search-card-front/search-card-front.component';
import SearchCardBack from '../search-card-back/search-card-back.component';
import {  ResultCard } from './search-card.styles';
import { getInfo } from '../../redux/actions/movieActions';

const SearchCard = ({ movie, getInfo, addMovie, movieInfo }) => {

    const [showInfo, setShowInfo] = useState(false)
    const [currentMovie, setCurrentMovie] = useState(null)



    //write a function to itterate through movieInfo array to check if the specified movie already has its correlated info in state
    // const checkStateForMovie = (movieId) => {
    //     movieInfo.find(movie => movie.id === movieId)
    // }
    // const grabMovieInfo = (movieId) => {
    //     getInfo(movieId)
    // }

    // const getMovie = (movieId) => { 
    //    getInfo(movieId)
    // }

    const handleInfo = (movieId) => {
        // use function from above here 
        setCurrentMovie(getInfo(movieId))
        setShowInfo(!showInfo)
        // const movie = movieInfo.find(movie => movie.id === movieId)
        // if (movie) {
        //     setCurrentMovie(movie)
        //     setShowInfo(!showInfo)
        // } else {
        //     getInfo(movieId)
        //     setShowInfo(!showInfo)
        //     // try {
        //     //     console.log("1")
        //     //     const result = await getInfo(movieId)
        //     //     console.log(result)
        //     //     if (componentIsMounted.current){
        //     //         setCurrentMovie(movieInfo[movieInfo.length-1])
        //     //         setShowInfo(!showInfo)
        //     //         console.log("3")
        //     //     }
        //     // } catch (err) {
        //     //     console.log(err)
        //     // }
        // }
        // console.log('4')
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