class PetsController < ApplicationController
    # skip_before_action :verify_authenticity_token
    protect_from_forgery except: :create
    def index   
        pet = Pet.all
        render json: pet
    end

    def create
        # byebug
        pet = Pet.create(pet_params)
        # byebug
        render json: {pet: pet}

        # pet = Pet.new(pet_params)

        # if params.has_key?(:name) && params.has_key?(:breed) && params.has_key?(:age) && params.has_key?(:size) && params.has_key?(:seller_id) && params[:name] && params[:breed] && params[:age] && params[:size] && params[:user_id]

        #     pet.save
        #     render json: {pet: pet}
        # else
        #     render json: {errors: "please enter  all info"}
        # end
    end

    def update
        pet = Pet.find(params[:id])
        pet.update(pet_params)
        render json: {message: "your pet is updated"}
    end

    private
    def pet_params
        params.permit(:name, :breed, :age, :gender, :size, :seller_id, :user_id, :order_id)
        # params.require(:pet).permit(:name, :breed, :age, :gender, :size, :seller_id, :user_id, :order_id)
    end
end
