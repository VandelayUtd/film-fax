class AddRottenTomatoesRatingToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :rotten_tomatoes_rating, :string
  end
end
