class Review < ApplicationRecord
    validates :user_id, :spot_id, :rating

    belongs_to :user 
    belongs_to :spot 
    
end
