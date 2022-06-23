

class MoviesController < ApplicationController


    def index 
        movies = Movie.all 
        render json: movies
    end


    def create
        created_movie = MovieCreator.new(params).get_movie
        movie = Movie.new
    
        movie.title = created_movie["title"]
        movie.image = created_movie["image"]
        movie.plot = created_movie["plot"]
        movie.genres = created_movie["genres"]
        movie.stars = created_movie["stars"]
        movie.release_date = created_movie["releaseDate"]
        movie.director = created_movie["directors"]
        movie.api_id = created_movie["id"]
        movie.dp = created_movie["fullCast"]["others"][2]["items"][0]["name"]
        # movie.dp_name = created_movie["dp"]["items"][0]["name"]
        # movie.dp_id = created_movie["dp"]["items"][0]["id"]

        if movie.save 
            render json: movie, status: :created
        else 
            render json: {error: "#{movie.title} is already on the list"}, status: :unprocessable_entity
        end
    end

    def search
        # add error handling 
        searched_movies = MovieCreator.new(params).get_search_results
        render json: searched_movies
    end

    def info 
        movie_info = MovieCreator.new(params).get_movie
        render json: movie_info
    end

    def delete 
        movie = Movie.find(params[:id])
        if movie.destroy 
            render json: { confirmation: "#{movie.title} has been removed from the list"}, status: :ok 
        else  
            render json: { error: "your request was denied"}, status: :unprocessable_entity
        end
    end

end
