require 'dotenv'
require 'json'
Dotenv.load

class GetMoviesController < ApplicationController

    API_KEY = ENV["IMDB_API_KEY"]

    def index 
     
    end

    def create

        @response =  RestClient.get "https://imdb-api.com/en/API/Title#{API_KEY}/#{params[:id]}",
                {content_type: :json, accept: :json, "user-key": ENV["IMDB_API_KEY"]}
            
        @movie = JSON.parse(@response.body)

        render json: @movie
        
    end
    

end
