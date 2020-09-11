class CreateSpotAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :spot_amenitites do |t|
      t.integer :amenity_id, null: false
      t.integer :spot_id, null: false

      t.timestamps
    end
    add_index :spot_amenitites, :amenity_id
    add_index :spot_amenitites, :spot_id
  end
end
