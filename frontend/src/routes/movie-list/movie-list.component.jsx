import React from 'react'
import MovieCard from '../../components/movie-card/movie-card.component'

import { MovieContainer, Title, MovieGrid } from './movie-list.styles';


const MovieList = ({movies, deleteMovie}) => {
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
export default MovieList;
