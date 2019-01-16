class ApplicationUploader
  protected

  def self.gen_filename(image)
    "#{SecureRandom.uuid}.#{extension(image)}"
  end

  private

  def self.extension(image)
    case image.content_type
    when 'image/jpeg'
      'jpg'
    end
  end
end
