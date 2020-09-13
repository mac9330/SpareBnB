class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in

    def create 
        @review = Review.new(review_params)
        @review.user_id = current_user.id 
        if @review.save 
            render :show
        else  
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end 
    end 


    def review_params
        params.require(:review).permit(:user_id, :spot_id, :rating, :description)
    end

end
