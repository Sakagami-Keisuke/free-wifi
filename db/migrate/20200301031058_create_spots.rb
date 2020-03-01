class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|

      t.string :name
      t.string :address
      t.string :price
      t.string :mood
      t.string :Lat
      t.string :Lng


      t.timestamps
    end
  end
end
