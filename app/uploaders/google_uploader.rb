class GoogleUploader < ApplicationUploader
  ENDPOINT = 'https://www.googleapis.com/upload/storage/v1/b/vacation-images/o?uploadType=media'

  def self.upload(image)
    filename = gen_filename(image)
    RestClient.post(
      url(filename),
      image.tempfile,
      { content_type: image.content_type }
    )
    filename
  end

  private

  def self.url(filename)
    "#{ENDPOINT}&key=#{ENV['GOOGLE_KEY']}&name=#{filename}"
  end
end
