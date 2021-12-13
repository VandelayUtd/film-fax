

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
        @movie.api_id = created_movie["movie"]["id"]
        if @movie.save 
            render json: @movie, status: :created
        else 
            render json: {error: "#{@movie.title} is already on the list"}, status: :unprocessable_entity
        end
    end

    def search
        searched_movies = MovieCreator.new(params).get_search_results
        render json: searched_movies
    end

    def delete 
        @movie = Movie.find(params[:id])
        if @movie.destroy 
            render json: { confirmation: "#{@movie.title} has been removed from the list"}, status: :ok 
        else  
            render json: { error: "your request was denied"}, status: :unprocessable_entity
        end
    end

end
