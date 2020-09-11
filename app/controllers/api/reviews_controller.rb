class Api::ReviewsController < ApplicationController

    def create 
        @review = Review.new(review_params)
        @review.user_id = current_user.id 
        if @review.save 
        else  
            render json: @review.errors.full_messages, status: 422
        end 
    end 


    def review_params
        params.require(:review).permit(:user_id, :spot_id, :rating, :description)
    end

end
