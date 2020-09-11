class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :spot_id, null: false 
      t.date :check_in, null: false 
      t.date :check_out, null: false 
      t.integer :num_guests, null: false 
      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :spot_id
  end
end
