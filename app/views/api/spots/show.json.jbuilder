json.spot do 
    json.partial! '/api/spots/spot', spot: @spot
end

json.user do 
    json.partial! '/api/users/user', user: @spot.user 
end

@spot.reviews.includes(:user).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :id, :email, :fname, :lname
      end
    end
  end