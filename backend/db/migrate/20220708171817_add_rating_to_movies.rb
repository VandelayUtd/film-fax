class AddRatingToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :rating, :string
  end
end
