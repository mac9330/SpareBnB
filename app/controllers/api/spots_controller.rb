class Api::SpotsController < ApplicationController

    def index
        @spots =  params[:bounds] ? Spot.in_bounds(params[:bounds]) : Spot.all

        render :index
    end

    def show
        @spot = Spot.find(params[:id])
        render :show
    end 

    def create
        @spot = Spot.new(spot_params)
        if @spot.save
            render :show
        else
            render json: @spot, status: :unprocessable_entity
        end
    end

    def spot_params
        params.require(:spot).permit(:name, :user_id, :description, :price, :num_beds, :num_bedrooms, :num_bathrooms, :max_occupancy, :latitude, :longitude)
    end

end


