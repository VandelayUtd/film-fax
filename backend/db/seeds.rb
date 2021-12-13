# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'rest-client'

def imdb_secret_key 
    ENV["IMDB_API_KEY"]
end

    
def movie_dataset 

    api_data = { key: imdb_secret_key }

    movies = RestClient.get ("https://imdb-api.com/en/API/ComingSoon/#{api_data[:key]}")

    movie_array = JSON.parse(movies)["items"]

    movie_array.each do |movie|
        Movie.create(title: movie["title"], release_date: movie["releaseState"], director: movie["directors"], plot: movie["plot"], image: movie["image"], genres: movie["genres"], stars: movie["stars"], api_id: movie["id"])
    end

end

movie_dataset()