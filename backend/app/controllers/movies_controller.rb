require 'dotenv'
require 'json'
Dotenv.load


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
        
        @response =  RestClient.get "https://imdb-api.com/en/API/Title/#{API_KEY}/#{params["id"]}",
        {content_type: :json, accept: :json, "user-key": ENV["IMDB_API_KEY"]}
    
        api_params = JSON.parse(@response.body)
        binding.pry
        movie = Movie.new(movie_params)
        movie.director = params[:movie][:directors]
        movie.release_date = params[:movie]

        if movie.save 
            render json: movie
        end
    end


    private
    
    def movie_params 
        params.require(:movie).permit(:title, :image, :genres, :plot, :stars)
    end

end
