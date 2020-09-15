class Review < ApplicationRecord
    validates :user_id, :spot_id, :rating, presence: true
    validates :spot_id, uniqueness: { scope: :user_id, message: "Error: You've already reviewed this Listing!" }
    validates :rating, numericality: { only_integer: true }

    belongs_to :user 
    belongs_to :spot 
    
end
