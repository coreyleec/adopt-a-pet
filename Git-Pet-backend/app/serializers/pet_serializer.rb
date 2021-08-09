class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :gender, :size, :seller_id, :user_id, :order_id
  belongs_to :user
  belongs_to :seller
  belongs_to :order
end
