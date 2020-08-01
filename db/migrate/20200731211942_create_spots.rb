class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :user_id, null: false 
      t.string :name, null: false
      t.text :description, null: false 
      t.float :price, null: false 
      t.integer :num_beds, null: false 
      t.integer :num_bedrooms, null: false
      t.integer :num_bathrooms, null: false 
      t.integer :max_occupancy, null: false 
      t.float :longitude, null: false 
      t.float :latitude, null: false

      t.timestamps
    end
    add_index :spots, :user_id
    add_index :spots, :longitude 
    add_index :spots, :latitude
  end
end
