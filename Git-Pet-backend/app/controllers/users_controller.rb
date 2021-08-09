class UsersController < ApplicationController
    # skip_before_action :logged_in?, only: [:create, :login]

    def index
        user = User.all
        render json: user
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.new(user_params)

        if params.has_key?(:name) && params.has_key?(:phone) && params.has_key?(:email) && params.has_key?(:password) && params[:name] && params[:phone] && params[:email] && params[:password]
            user.save
            render json: {name: user.name, token: encode_token({user_id: user.id})}
        else
            render json: {errors: "please enter info"}
        end

    end

    def login
        user = User.find_by(name: params[:name])
        # user.includes(:pets)
        # byebug    
            if user && user.authenticate(params[:password])
                render json: {user: user, token: encode_token({user_id: user.id})}, include: [:pets, :orders, :sellers]
            else
                render json: {error: "please try agin"}
            end 

    end

    # def update
    #     byebug
    #      pet = Pet.find_by(id: params[:petId])
    #      bird = Bird.create(params.permit(:name, :species))
    #      user = User.find_by(id: params[:userId])
    #      user.pets.push(pet)
    # end

    private

    def user_params
        params.permit(:name, :phone, :email, :password)
    end
end
