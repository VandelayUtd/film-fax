import React from 'react'
import MovieCard from '../movie-card/movie-card.component'

import { MovieContainer, Title, MovieGrid } from './movie-index.styles';


const MovieIndex = ({movies, deleteMovie}) => {
        return (
            <>
                <MovieContainer>
                <Title>Movies</Title>
                    <MovieGrid>
                    {
                        movies.map((movie) => 
                            <MovieCard 
                                movie={movie} 
                                key={movie.id} 
                                deleteMovie={deleteMovie}
                            />
                        )
                    }
                    </MovieGrid>
                </MovieContainer>
            </>
        );
};
export default MovieIndex;
