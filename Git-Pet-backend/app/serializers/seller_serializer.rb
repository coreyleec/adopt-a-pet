class SellerSerializer < ActiveModel::Serializer
    attributes :id, :name, :address, :phone, :email
    has_many :orders
    has_many :pets
    has_many :users
  end
  