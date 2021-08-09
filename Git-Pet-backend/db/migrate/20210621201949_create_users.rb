class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :password_digest
      # t.integer :pet_id
      t.timestamps
    end
  end
end
