class Seller < ApplicationRecord
    has_many :orders
    has_many :pets
    has_many :users, through: :orders
    has_secure_password
end
