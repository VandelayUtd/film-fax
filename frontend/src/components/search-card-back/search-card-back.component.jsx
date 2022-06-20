import { Details, ButtonContainer, Container, Title } from './search-card-back.styles'


const SearchCardBack = ({movie, handleInfo, addMovie }) => {

    
    console.log(movie)
    console.log(movie.fullCast.others)
    return (
        <>
            <Container>
                <div>
                    <img  src={movie.image} alt='movie poster' />
                     <Title>{movie.title}</Title>
                    <ButtonContainer>
                        <button onClick={()=> handleInfo(movie.id)} >info</button>
                        <button onClick={()=> addMovie(movie)}>add</button>
                    </ButtonContainer> 
                </div>
                <Details >
                    <span>Directed by {movie.directors}</span>
                    <br/>
                    <span>Rated: {movie.contentRating}</span>
                    <span>Staring: {movie.stars}</span>
                    <span>Genres: {movie.genres}</span>
                    <span>Languages: {movie.languages}</span>
                    <span>iMDb Rating: {movie.imDbRating}</span>
                </Details>
                <div>
                    { movie.tagline ? 
                        <h3>"{movie.tagline}"</h3>
                        :
                        null
                    }
                    <p>{movie.plot}</p>
                </div>

            </Container>
        </>
    )
}

export default SearchCardBack