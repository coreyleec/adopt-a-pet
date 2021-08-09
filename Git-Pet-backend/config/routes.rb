Rails.application.routes.draw do
  resources :pets
  resources :sellers
  resources :orders
  resources :users

  post "usersignup", to: "users#create"
  post "userlogin", to: "users#login"

  post "sellersignup", to: "sellers#create"
  post "sellerlogin", to: "sellers#login" 

  post "pets", to: "pets#create" 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

