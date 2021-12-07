class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director 
      t.string :image
      t.string :release_date
      t.string :genres
      t.string :plot
      t.string :stars
      t.boolean :watched, default: false 

      t.timestamps
    end
  end
end
