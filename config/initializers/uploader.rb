Uploader = 
  case Rails.application.config.uploader
  when :google
    GoogleUploader
  when :local
    LocalUploader
  end
