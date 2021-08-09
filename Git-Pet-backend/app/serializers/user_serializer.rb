  class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :pets

  has_many :pets
  has_many :sellers
  has_many :orders
end
