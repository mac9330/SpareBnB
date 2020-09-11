class Api::ReservationsController < ApplicationController

    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.user_id = current_user.id 
        if @reservation.overlapping_reservations && @reservation.save
            render :show
        else  
            render json: @reservations.errors.full_messages, status: 400
        end
    end 

    def index 
        @reservations = Reservation.all 
        render :index 
    end



    def destroy 
        @reservation = Reservation.find(params[:id])
        if @reservation 
            @reservation.destroy 
        else  
            render json: ['reservation is invalid'], status: 422
        end
    end

    def reservation_params 
        params.require(:reservation).permit(:check_in, :check_out, :num_guests, :user_id, :spot_id)
    end
end
