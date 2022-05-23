class GetSearchDetailsJob < ApplicationJob
  queue_as :default

  API_KEY = ENV["IMDB_API_KEY"]


  def perform(movies_array)
    # Do something later
      movies_details = movies_array.map do |movie|
          response =  RestClient.get "https://imdb-api.com/en/API/Title/#{API_KEY}/#{movie["id"]}"
          movie_object = JSON.parse(response.body)
          # dp_response = RestClient.get "https://imdb-api.com/en/API/FullCast/#{API_KEY}/#{movie["id"]}"
          # dp_object = JSON.parse(dp_response.body)
          # movie_object["dp"] = dp_object["others"][2]
          movie_object
      end
      
      movies_details
  end
end
