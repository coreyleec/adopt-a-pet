class SellersController < ApplicationController
    def index
        seller = Seller.all

        render json: seller
    end

    def create
        seller = Seller.new(user_params)

        if params.has_key?(:name) && params.has_key?(:phone) && params.has_key?(:email) && params.has_key?(:password) && params[:name] && params[:phone] && params[:email] && params[:password]
            seller.save
            render json: {name: seller.name, token: encode_token({user_id: seller.id})}
        else
            render json: {errors: "please enter info"}
        end

    end

    def login
        seller = Seller.find_by(name: params[:name])
        # byebug    
            if seller && seller.authenticate(params[:password])
                render json: {seller: seller, token: encode_token({user_id: seller.id})}, include:[:pets, :orders, :users]
            else
                render json: {error: "please try agin"}
            end 

    end

    private

    def user_params
        params.permit(:name, :phone, :email, :password)
    end
end
