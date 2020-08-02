class Api::SpotsController < ApplicationController

    def index
        @spots =  params[:bounds] ? Spot.in_bounds(params[:bounds]) : Spot.all

        render :index
    end

    def show
        @spot = Spot.find(params[:id])
        render :show
    end 

    def spot_params
        params.require(:spot).permit(:price, :bounds, :num_beds, :num_bedrooms, :num_bathrooms, :max_occupancy, :lat, :lng)
    end

end


