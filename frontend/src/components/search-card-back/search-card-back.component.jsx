import { Details } from './search-card-back.styles'


const SearchCardBack = ({ movie }) => {

    return (
        <>
            <Details >
                <span>Directed by {movie.directors}</span>
                <br/>
                <span>Rated: {movie.contentRating}</span>
                <span>Staring: {movie.stars}</span>
                <span>Genres: {movie.genres}</span>
                <span>Languages: {movie.languages}</span>
            </Details>
            <div>
                <h3>"{movie.tagline}"</h3>
                <p>{movie.plot}</p>
            </div> 
        </>
    )
}

export default SearchCardBack