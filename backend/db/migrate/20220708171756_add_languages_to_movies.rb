class AddLanguagesToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :languages, :string
  end
end
