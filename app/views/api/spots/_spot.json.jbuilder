json.extract! spot, :id, :user_id, :name, :description, :price, :num_beds, :num_bedrooms, :num_bathrooms, :max_occupancy, :longitude, :latitude
json.photoUrls spot.photos.map { |photo| url_for(photo) }
json.average_rating @spot.average_rating


