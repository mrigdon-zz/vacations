class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def image_hash(image)
    {
      url: prod? ? prod_url(image) : dev_url(image),
      file: nil
    }
  end

  private

  def prod?
    @production ||= Rails.env == 'production'
  end

  def prod_url(image)
    image.blob.service_url
  end

  def dev_url(image)
    Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
  end
end
