

class MoviesController < ApplicationController

    def index 
        movies = Movie.all 
        render json: movies
    end

    def show 
        movie = Movie.find_by(id: params[:id])
        render json: movie
    end

    def create
        created_movie = MovieCreator.new(params).get_movie
        @movie = Movie.new
    
        @movie.title = created_movie["movie"]["title"]
        @movie.image = created_movie["movie"]["image"]
        @movie.plot = created_movie["movie"]["plot"]
        @movie.genres = created_movie["movie"]["genres"]
        @movie.stars = created_movie["movie"]["stars"]

        @movie.release_date = created_movie["movie"]["releaseDate"]
        @movie.director = created_movie["movie"]["directors"]
        if @movie.save 
            render json: @movie, status: :created
        else 
            render json: @movie.errors.full_messages.to_sentence, status: :unprocessible_entity
        end
    end

    def search
        searched_movies = MovieCreator.new(params).get_search_results
        render json: searched_movies
    end

end
