
import { Card, Footer } from './movie-card-front.styles';

const MovieCardFront = ({movie, handleDelete, handleToggle}) => {


    return (
        <Card >
                <img src={movie.image} />
                <br/>
                <div>{movie.title}</div>
                <Footer>
                    <button onClick={handleToggle}>info</button>
                    <button onClick={handleDelete}>delete</button>
            </Footer>
        </Card>
    );
};
export default MovieCardFront;