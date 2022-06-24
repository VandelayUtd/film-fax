class AddSimilarsToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :similars, :text, array: true, default: []
  end
end
