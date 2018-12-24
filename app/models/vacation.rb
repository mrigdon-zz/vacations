# == Schema Information
#
# Table name: vacations
#
#  id         :bigint(8)        not null, primary key
#  latitude   :float            not null
#  longitude  :float            not null
#  title      :string           not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Vacation < ApplicationRecord
  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :title, presence: true
  validates :year, presence: true
end