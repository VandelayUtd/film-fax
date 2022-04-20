import React from 'react'
import MovieCard from '../movie-card/movie-card.component'

import { MovieContainer, Title, Container } from './movie-index.styles';


const MovieIndex = ({movies, deleteMovie}) => {
        return (
            <Container>
                <Title>Movies</Title>
                <MovieContainer>
                {
                    movies.map((movie) => 
                        <MovieCard 
                            movie={movie} 
                            key={movie.id} 
                            deleteMovie={deleteMovie}
                        />
                    )
                }
                </MovieContainer>
            </Container>
        );
};
export default MovieIndex;
