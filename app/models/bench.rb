# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    west_bound = bounds[:southWest][:lng].to_f
    east_bound = bounds[:northEast][:lng].to_f
    north_bound = bounds[:northEast][:lat].to_f
    south_bound = bounds[:southWest][:lat].to_f
    Bench.where(lat: south_bound..north_bound, lng: west_bound..east_bound)
  end
end
