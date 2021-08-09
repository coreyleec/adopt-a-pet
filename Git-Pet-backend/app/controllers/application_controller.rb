class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :exception, prepend: true
    protect_from_forgery with: :null_session
    # skip_before_action :verify_authenticity_token
    # skip_before_action :verify_authenticity_token
    # before_action :configure_permitted_parameters, if: :devise_controller?

    # before_action :logged_in?
    def encode_token(playload)
        JWT.encode(playload, "Git-Pet")
    end
    
    # def logged_in?
    #     headers = request.headers["Authorization"]
    #     token = headers.split(" ")[1]

    #     begin
    #         user_id = JWT.decode(token,"Git-Pet")[0]["user_id"]
    #         user = User.find(user_id)
    #     rescue
    #         user = nil
    #     end
      
    #     unless user
    #         render json: {error: "Please login!!"}
    #     end
    #   end
end
