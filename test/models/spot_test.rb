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
require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
