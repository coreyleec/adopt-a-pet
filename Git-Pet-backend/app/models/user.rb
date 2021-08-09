class User < ApplicationRecord
    has_many :orders
    has_many :pets
    has_many :sellers, through: :orders
    has_secure_password
    # validates :name, uniqueness: { case_sensitive: false }
end

# class User < ApplicationRecord
#     attr_accessor :password
  
#     def authenticate(plaintext_password)
#       if BCrypt::Password.new(self.password_digest) == plaintext_password
#         self
#       else
#         false
#       end
#     end
#   end
  