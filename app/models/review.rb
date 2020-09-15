class Review < ApplicationRecord
    validates :user_id, :spot_id, :rating, presence: true
    validates :spot_id, uniqueness: { scope: :user_id, message: "You've reviewed Listing!" }

    belongs_to :user 
    belongs_to :spot 
    
end
