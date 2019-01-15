class LocalUploader < ApplicationUploader
  def upload
    File.open("public/uploads/#{@filename}", 'wb') do |file|
      file.write(@image.read)
    end
    @filename
  end
end
