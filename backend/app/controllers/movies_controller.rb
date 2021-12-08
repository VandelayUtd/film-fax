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
        movie = Movie.new(movie_params)
        movie.director = params[:movie][:directors]
        movie.release_date = params[:movie][:releaseDate]

        if movie.save 
            render json: movie
        end
    end


    private
    
    def movie_params 
        params.require(:movie).permit(:title, :image, :genres, :plot, :stars)
    end

end
