module ImageService
  def upload(image)
    LocalUploader.new(image).upload
  end
end
