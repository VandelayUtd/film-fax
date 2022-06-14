import { TextArea, ButtonContainer } from './search-card-front.styles'

const SearchCardFront = ({ movie, handleInfo, addMovie}) => {

    return(
        <>
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
        </>
    )
}
export default SearchCardFront