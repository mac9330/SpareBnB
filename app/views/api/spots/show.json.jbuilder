json.spot do 
    json.partial! '/api/spots/spot', spot: @spot
end

json.user do 
    json.partial! '/api/users/user', user: @spot.user 
end
