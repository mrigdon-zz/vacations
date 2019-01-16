class LocalUploader < ApplicationUploader
  def self.upload(image)
    filename = gen_filename(image)
    File.open("public/uploads/#{filename}", 'wb') do |file|
      file.write(image.read)
    end
    filename
  end
end
