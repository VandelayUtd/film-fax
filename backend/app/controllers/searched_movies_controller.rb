require 'dotenv'
require 'json'
Dotenv.load

class SearchedMoviesController < ApplicationController
    API_KEY = ENV["IMDB_API_KEY"]

    def create

        @response =  RestClient.get "https://imdb-api.com/en/API/SearchMovie/#{API_KEY}/#{params["title"].gsub(" ", "%20")}",
                {content_type: :json, accept: :json, "user-key": ENV["IMDB_API_KEY"]}
            
        @movie_array = JSON.parse(@response.body)["results"]

        render json: @movie_array
        
    end
    
end
