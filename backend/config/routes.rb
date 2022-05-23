Rails.application.routes.draw do

  get "/movies/search", to: "movies#search"
  delete "/movies/:id", to: "movies#delete"

  # resources :get_movies
  resources :searched_movies
  resources :movies_details
  resources :movies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
