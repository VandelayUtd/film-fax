class AddDpToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :dp, :string
  end
end
