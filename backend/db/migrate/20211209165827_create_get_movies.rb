class CreateGetMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :get_movies do |t|

      t.timestamps
    end
  end
end
