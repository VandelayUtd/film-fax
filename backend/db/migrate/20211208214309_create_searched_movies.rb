class CreateSearchedMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :searched_movies do |t|
      t.string :title
      t.string :api_id
      t.timestamps
    end
  end
end
