class Reservation < ApplicationRecord
    validates :user_id, :spot_id, :check_in, :check_out, :num_guests, presence: true

    belongs_to :user 
    belongs_to :spot 

    def overlapping_reservations
        Reservation
        .where.not(id: self.id)
        .where(spot_id: spot_id)
        .where.not("check_in > ? OR check_out < ?", self.check_in, self.check_out)
    end

    def already_booked? 
        overlapping_reservations.empty? 
    end
end
