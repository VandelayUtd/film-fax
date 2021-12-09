require 'dotenv'
require 'json'
Dotenv.load

class SearchedMoviesController < ApplicationController
    API_KEY = ENV["IMDB_API_KEY"]

    def index 
     
    end

    def create

        @response =  RestClient.get "https://imdb-api.com/en/API/SearchMovie/#{API_KEY}/#{params[:title].gsub(" ", "%20")}",
                {content_type: :json, accept: :json, "user-key": ENV["IMDB_API_KEY"]}
            
        @movie_array = JSON.parse(@response.body)["results"]

        render json: @movie_array
        
    end
    
end

# @movie_array.each do |movie|
#     SearchedMovie.create(title: movie["title"], api_id: movie["id"])
# end
# def index  
#     searched_movies = SearchedMovies.all
#     render json: searched_movies
# end

# def create 
#     MovieSearch.new(params[:searched_movie][:title]).send_movie_options
# end

# private 

# def searched_movie_params 
#     params.require(:searched_movie).permit(:title, :api_id)
# end