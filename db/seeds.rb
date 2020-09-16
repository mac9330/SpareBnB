# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'
require 'faker'
require 'open-uri'
# require 'byebug'

User.destroy_all
Spot.destroy_all
Review.destroy_all
Reservation.destroy_all

is = 0
csv_text = File.read(Rails.root.join('lib', 'seeds', 'seeds.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  u = User.create(email: Faker::Internet.email, password: "hunter2", fname: Faker::Name.first_name, lname: Faker::Name.last_name)
  s = Spot.create(user_id: u.id, name: Faker::Lorem.sentence(word_count: 3, supplemental: true), description: row["description"], price: row["price"][1..-1].to_f, num_beds: row["num_beds"].to_i, num_bedrooms: row["num_bedrooms"].to_i, num_bathrooms: row["num_bathrooms"].to_f, max_occupancy: row["max_occupancy"].to_i, latitude: row["latitude"].to_f, longitude: row["longitude"].to_f)
  r1 = Review.create(user_id: u.id-1, spot_id: s.id-3, rating: rand(1..5), description: row["comment1"] || null)
  r2 = Review.create(user_id: u.id-2, spot_id: s.id-1, rating: rand(1..5), description: row["comment2"] || null)
  r3 = Review.create(user_id: u.id-3, spot_id: s.id-2, rating: rand(1..5), description: row["comment3"] || null)
  file = open("https://sparebnb-seeds.s3.amazonaws.com/homes/#{is}.jpg")
  s.photos.attach(io: file, filename: "#{is}.jpg")
  j = 0
  while j < 4 
    file = open("https://sparebnb-seeds.s3.amazonaws.com/rooms/#{is}-#{j}.jpg")
    s.photos.attach(io: file, filename: "#{is}-#{j}.jpg")

    j += 1
  end
  is += 1
end

demo = User.create(email: "myoung4@binghamton.edu", password: "123456", fname: "Mackenzie", lname: "Young")
    
