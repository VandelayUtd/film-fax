require 'rest-client'
require 'dotenv'
require 'json'
Dotenv.load


class MovieCreator 
    API_KEY = ENV["IMDB_API_KEY"]

    def initialize(movie)
        @movie = movie
    end

    
    def get_movie

    @response =  RestClient.get "https://imdb-api.com/en/API/Title/#{API_KEY}/#{@movie["id"]}",
    {content_type: :json, accept: :json, "user-key": ENV["IMDB_API_KEY"]}

    movie_object = {"movie" => JSON.parse(@response.body)}
    
    movie_object
    end

end
