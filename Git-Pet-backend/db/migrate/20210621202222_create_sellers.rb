class CreateSellers < ActiveRecord::Migration[6.1]
  def change
    create_table :sellers do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
