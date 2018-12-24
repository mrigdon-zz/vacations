class CreateVacations < ActiveRecord::Migration[5.2]
  def change
    create_table :vacations do |t|
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :title, null: false
      t.integer :year, null: false
      t.text :summary, null: false, default: ''

      t.timestamps
    end
  end
end
