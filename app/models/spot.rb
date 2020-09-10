# == Schema Information
#
# Table name: spots
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  name          :string           not null
#  description   :text             not null
#  price         :float            not null
#  num_beds      :integer          not null
#  num_bedrooms  :integer          not null
#  num_bathrooms :integer          not null
#  max_occupancy :integer          not null
#  longitude     :float            not null
#  latitude      :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Spot < ApplicationRecord
    validates :user_id, :name, :description, :price, :num_beds, :num_bedrooms, :num_bathrooms, :max_occupancy, :longitude, :latitude, presence: true
    

    belongs_to :user

    has_many_attached :photos

    def self.in_bounds(bounds)
        self
            .where("latitude < ?", bounds[:northEast][:lat])
            .where("latitude > ?", bounds[:southWest][:lat])
            .where("longitude < ?", bounds[:northEast][:lng])
            .where("longitude > ?", bounds[:southWest][:lng])
    end
end
