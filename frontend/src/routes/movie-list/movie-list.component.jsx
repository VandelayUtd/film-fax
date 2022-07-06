import React from 'react'
import MovieCard from '../../components/movie-card/movie-card.component'

import { MovieContainer, Title, MovieGrid } from './movie-list.styles';


const MovieList = ({movies}) => {
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
                            />
                        )
                    }
                    </MovieGrid>
                </MovieContainer>
            </>
        );
};
export default MovieList;
