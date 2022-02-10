class AddNotesToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :notes, :string
  end
end
