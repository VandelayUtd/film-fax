import React, { Fragment, useState} from 'react';
// import MovieDropdown from '../movie-dropdown/movie-dropdown.component';
import MovieCardFront from '../movie-card-front/movie-card-front.component';
// import { Card, Title, Image, Footer, Button} from './movie-card.styles';
import MovieCardBack from '../movie-card-back/movie-card-back.component';

import SearchCardBack from '../search-card-back/search-card-back.component';

const MovieCard = ({movie, deleteMovie}) => {

    const [show, setShow] = useState(false);

    const handleDelete = (e) => {
        deleteMovie(movie.id)
    }

    const handleToggle = () => {
        setShow(!show)
    }

    return (
        <Fragment>
            <div>
            { 
                !show ? (
                    <MovieCardFront 
                        movie={movie} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                    />
                ) : (
                    <MovieCardBack 
                        movie={movie}
                        handleDelete={handleDelete} 
                        handleInfo={handleToggle} 
                    />
                )
            }
            </div>
        </Fragment>


    );
};
export default MovieCard;

// <Card >
//         <img src={movie.image} />
//         {/* {
//             show ?
//             <div>
//                 <MovieDropdown movie={movie}/>
//             </div> 
//             : null
//         } */}
//         <br/>
//         <span>{movie.title}</span>
//         <Footer>
//             <button onClick={()=> setShow(!show)}>info</button>
//             <button onClick={()=> deleteMovie(movie.id)}>delete</button>
//         </Footer>

// </Card>