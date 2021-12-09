require 'rest-client'

class MovieSearch 

    def initialize(title)
        @title = title
    end

    API_KEY = ENV["IMDB_API_KEY"]


    def send_movie_options
        movies = RestClient.get ("https://imdb-api.com/en/API/SearchMovie/#{API_KEY}/#{self.title}")
        movie_array = JSON.parse(movies)["results"]
        binding.pry
        movie_array.each do |movie|
            SearchedMovie.create(title: movie["title"], api_id: movie["id"])
        end
    end




end

# fetch(`https://imdb-api.com/en/API/SearchMovie/k_gyxobrhk/${movie.title}`)
# .then(res => res.json())
# .then(data => {
#     // console.log(data.results[0].id)
#     fetch(`https://imdb-api.com/en/API/Title/k_gyxobrhk/${data.results[0].id}`)
#     .then(res => res.json())
#     .then(data => {
#         // console.log(data)
        
#     })
# })

        
#     def movie_dataset 
    
#         api_data = { key: imdb_secret_key }
    
    
#         movie_array = JSON.parse(movies)["items"]
    
#     end
    
#     movie_dataset()
    