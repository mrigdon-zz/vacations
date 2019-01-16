class GoogleUploader < ApplicationUploader
  UPLOAD_ENDPOINT = 'https://www.googleapis.com/upload/storage/v1/b/vacation-images/o?uploadType=media'
  DELETE_ENDPOINT = 'https://www.googleapis.com/storage/v1/b/vacation-images/o'

  def self.upload(image)
    filename = gen_filename(image)
    RestClient.post(
      upload_url(filename),
      image.tempfile,
      { content_type: image.content_type }
    )
    filename
  end

  def self.purge_later(filename)
    RestClient.delete(delete_url(filename))
  end

  private

  def self.upload_url(filename)
    "#{UPLOAD_ENDPOINT}&#{key_param}&name=#{filename}"
  end

  def self.delete_url(filename)
    "#{DELETE_ENDPOINT}/#{filename}?#{key_param}"
  end

  def self.key_param
    'key=' + ENV['GOOGLE_KEY']
  end
end
