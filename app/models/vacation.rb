# == Schema Information
#
# Table name: vacations
#
#  id         :bigint(8)        not null, primary key
#  latitude   :float            not null
#  longitude  :float            not null
#  summary    :text             default(""), not null
#  title      :string           not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Vacation < ApplicationRecord
  has_many_attached :images

  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :title, presence: true
  validates :year, presence: true
  validates :summary, presence: true

  def to_h
    as_json(only: [:latitude, :longitude, :title, :year, :summary])
      .merge('images' => image_urls(:images))
  end
end
