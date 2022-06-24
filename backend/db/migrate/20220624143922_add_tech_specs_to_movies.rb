class AddTechSpecsToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :tech_specs, :string

  end
end
