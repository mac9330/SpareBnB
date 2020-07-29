class Api::SessionsController < ApplicationController 

    def create
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render "api/users/show"
        else
            # debugger
            render json: ["Invalid Username or Password"], status: 401
        end
        # debugger
    end

    def destroy
        @user = current_user
        if @user 
            logout!
        else
            debugger
            render json: ["No one is Logged In"], status: 404
        end
    end


end
