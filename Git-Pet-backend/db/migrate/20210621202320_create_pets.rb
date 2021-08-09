class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.integer :age
      t.string :gender
      t.integer :size
      t.integer :seller_id
      t.integer :user_id, null: true
      t.integer :order_id, null: true

      t.timestamps
    end
  end
end
