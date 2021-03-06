
import { Card, Footer } from './movie-card-front.styles';

const MovieCardFront = ({movie, handleDelete, handleToggle}) => {


    return (
        <Card >
            <img src={movie.image} alt={movie.title}/>
            <br/>
            <div>
                {movie.title}
            </div>
            <Footer>
                <button onClick={handleToggle}>info</button>
                <button onClick={()=> handleDelete(movie.id)}>delete</button>
            </Footer>
        </Card>
    );
};
export default MovieCardFront;