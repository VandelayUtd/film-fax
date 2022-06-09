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
        movie_array
        # get_details(movie_array)
    end

    # def get_details(array) 
    #     movies_details = array.map do |movie|
    #         response =  RestClient.get "https://imdb-api.com/en/API/Title/#{API_KEY}/#{movie["id"]}"
    #         movie_object = JSON.parse(response.body)
    #         # dp_response = RestClient.get "https://imdb-api.com/en/API/FullCast/#{API_KEY}/#{movie["id"]}"
    #         # dp_object = JSON.parse(dp_response.body)
    #         # movie_object["dp"] = dp_object["others"][2]
    #         movie_object
    #     end
    #     byebug
    #     movies_details
    # end
    
end
