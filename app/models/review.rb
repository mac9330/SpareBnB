class Review < ApplicationRecord
    validates :user_id, :spot_id, :rating, presence: true

    belongs_to :user 
    belongs_to :spot 
    
end
