class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def image_urls(key)
    send(key).map do |image|
      Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
    end
  end
end
