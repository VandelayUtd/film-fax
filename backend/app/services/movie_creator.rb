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
        response =  RestClient.get "https://imdb-api.com/en/API/Title/#{API_KEY}/#{@movie["id"]}"

        movie_object = JSON.parse(response.body)
        
        movie_object
    end


    def get_search_results 
        response =  RestClient.get "https://imdb-api.com/en/API/SearchMovie/#{API_KEY}/#{@movie["q"].gsub(" ", "%20")}"
    
        movie_array = JSON.parse(response.body)["results"]
    end

end
