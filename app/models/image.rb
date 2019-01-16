# == Schema Information
#
# Table name: images
#
#  id             :bigint(8)        not null, primary key
#  filename       :string
#  imageable_type :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  imageable_id   :bigint(8)
#
# Indexes
#
#  index_images_on_imageable_type_and_imageable_id  (imageable_type,imageable_id)
#

class Image < ApplicationRecord
  belongs_to :imageable, polymorphic: true

  def to_h
    { id: id, url: Rails.application.config.upload_path + filename }
  end
end
