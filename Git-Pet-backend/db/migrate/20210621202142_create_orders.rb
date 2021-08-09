class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :seller_id
      # t.integer :pet_id
      t.integer :price

      t.timestamps
    end
  end
end
