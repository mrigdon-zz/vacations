class ApplicationUploader
  def initialize(image)
    @image = image
    @filename = "#{key}.#{extension}"
  end

  private

  def key
    @key ||= SecureRandom.uuid
  end

  def extension
    @extension ||=
      case @image.content_type
      when 'image/jpeg'
        'jpg'
      end
  end
end
