class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def image_urls(key)
    send(key).map do |image|
      if production?
        image.blob.service_url
      else
        Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
      end
    end
  end

  private

  def production?
    @production ||= Rails.env == 'production'
  end
end
