# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'httparty' # You don't need this if it's inside a Rails project
#                    # and you've included it in your Gemfile.

response = HTTParty.get("https://api.petfinder.com/v2/animals", headers: { 
"Authorization" => "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJZUE1QRFVwZUc5WXhEeWNhZHlzZTZHUGJmTHNiSGlzajRwMk10QXJqY3ZMRllJVnh4WCIsImp0aSI6IjZkN2ZkYTA4NDBiMjAxOWI3Mjc4ODJjNDRlMzRjOWFiMTdhZmNhNWFhZmMyMjJmZDBlMmI3MzZjOTMwZDEzYmEyNTYwYTlmOGMwMWJhYWQ1IiwiaWF0IjoxNjI0Mzk0MTc5LCJuYmYiOjE2MjQzOTQxNzksImV4cCI6MTYyNDM5Nzc3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.X43PYJwKLBBTuWqk382c7220moT4OjZllU-CHPUTgzk9nVrhXqx5oODBoXze7hr097xOquVQThucxMPL2ghQ7hc3f4TiWoKJP9cUj5XXq6Rozsn5ecOcIjuBOYItXdTyEn9v0b-dSqaSHeTn1j_680wAxOy5bx9tpF_6WwbrfiMqQjGrxW4jSSP0DgfLWuPumbGjBYsQTq_PT9l_t00-25_R_7TsAh66XKBfHV0e3z5l4KR0LcRzP2Lnx5ACW7fNmYSpnGvHqGwku1HNLwAi3bl3YkJafR-rt1q-BszzyeVsfqtIC2awNnkqhVcK9OEfqiX2TnNAt-aHSK9jbNBpNQ"
})

 
# petfinder = Petfinder::Client.new('YPMPDUpeG9YxDycadyse6GPbfLsbHisj4p2MtArjcvLFYIVxxX', 'pSmlV25RHJjMne45dDTQsHaL4UiPt8goyQ4ggDMN')

Pet.destroy_all
Seller.destroy_all
User.destroy_all
Order.destroy_all

puts "create seller"

10.times do
    name = Faker::Name.name 
    address = Faker::Address.full_address 
    phone = Faker::PhoneNumber.cell_phone
    email = Faker::Internet.email 
    password = Faker::Code.asin

    Seller.create(name:name, address:address, phone:phone, email:email, password_digest:password)
end


puts "create user"

10.times do
    name = Faker::Name.name 
    phone = Faker::PhoneNumber.cell_phone 
    email = Faker::Internet.email 
    password = Faker::Code.asin

    User.create(name:name, phone:phone, email:email, password_digest:password)
end

puts"create order"
10.times do
    user_id = User.ids.sample
    seller_id = Seller.ids.sample
    # pet_id = Pet.ids.sample
    price = rand(100..3000)

    Order.create(user_id:user_id, seller_id:seller_id, price:price)
end


puts "create dogs"
10.times do 
name = Faker::Creature::Dog.name
breed = Faker::Creature::Dog.breed
age = rand(1..15)
gender = Faker::Creature::Dog.gender
size = rand(10..100)
seller_id = Seller.ids.sample
user_id = User.ids.sample
order_id = Order.ids.sample

    Pet.create(name:name, breed:breed, age:age, gender:gender, size:size, seller_id:seller_id, user_id:user_id, order_id:order_id)
end


puts"Done"

# Did not push to git yet, require your passphrase!!!