

class MoviesController < ApplicationController

    def index 
        movies = Movie.all 
        render json: movies
    end

    def show 
        movie = Movie.find_by(id: params[:id])
        render json: movie
    end
    
    API_KEY = ENV["IMDB_API_KEY"]

    def create
        created_movie = MovieCreator.new(params).get_movie
        movie = Movie.new
    
        movie.title = created_movie["movie"]["title"]
        movie.image = created_movie["movie"]["image"]
        movie.plot = created_movie["movie"]["plot"]
        movie.genres = created_movie["movie"]["genres"]
        movie.stars = created_movie["movie"]["stars"]

        movie.release_date = created_movie["movie"]["releaseDate"]
        movie.director = created_movie["movie"]["directors"]
        if movie.save 
            render json: movie
        end
    end


    # private
    
    # def movie_params 
    #     params.require(:movie).permit(:title, :image, :genres, :plot, :stars)
    # end

end
