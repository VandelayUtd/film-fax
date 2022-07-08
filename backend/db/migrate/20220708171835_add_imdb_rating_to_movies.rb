class AddImdbRatingToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :imdb_rating, :string
  end
end
