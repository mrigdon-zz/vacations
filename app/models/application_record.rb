class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def image_urls(key)
    send(key).map do |image|
      image.blob.service_url.split('?').first
    end
  end
end
