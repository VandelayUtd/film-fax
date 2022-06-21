# require 'resque/server'
Rails.application.routes.draw do

  get "/movies/search", to: "movies#search"
  delete "/movies/:id", to: "movies#delete"
  get "/movies/info/:id", to: "movies#info"

  # resources :get_movies
  resources :searched_movies
  resources :movie_info
  resources :movies

  mount Resque::Server.new, at: '/jobs'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
