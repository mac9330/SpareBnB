class Reservation < ApplicationRecord
    validates :user_id, :spot_id, :check_in, :check_out, :num_guests, presence: true
    validate :no_overlap, on: :create
    validates :num_guests, numericality: { only_integer: true, other_than: 0 }
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

    def no_overlap 
        if !already_booked? 
            errors.add(:check_in, "Error: That date is already booked")
        end
    end

end
 