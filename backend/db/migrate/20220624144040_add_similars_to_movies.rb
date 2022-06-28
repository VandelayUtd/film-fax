class AddSimilarsToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :similars, :string, array: true, default: []
  end
end
