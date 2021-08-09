class Pet < ApplicationRecord
    belongs_to :seller
    belongs_to :user, optional: true
    belongs_to :order, optional: true
end
