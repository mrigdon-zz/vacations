class LocalUploader < ApplicationUploader
  def self.upload(image)
    filename = gen_filename(image)
    File.open(path(filename), 'wb') do |file|
      file.write(image.read)
    end
    filename
  end

  def self.purge_later(filename)
    File.delete(path(filename))
  end

  private

  def self.path(filename)
    "public/uploads/#{filename}"
  end
end
