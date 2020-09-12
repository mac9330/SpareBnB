class Amenity < ApplicationRecord

    validates :name, presence: true, uniqueness: true
    validates :icon, presence: true

    # has_many :spot_amenities

    # has_many :spots,
    #     through: :spot_amenities,
    #     source: :spot
end
