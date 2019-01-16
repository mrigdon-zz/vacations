class GoogleUploader < ApplicationUploader
  ENDPOINT = 'https://www.googleapis.com/upload/storage/v1/b/vacation-images/o?uploadType=media'

  def upload
    RestClient.post(url, @image.tempfile, { content_type: @image.content_type })
    @filename
  end

  private

  def url
    "#{ENDPOINT}&key=#{ENV['GOOGLE_KEY']}&name=#{@filename}"
  end
end
