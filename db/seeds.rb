# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

vacations = [
  {
    latitude: 22.890533,
    longitude: -109.916740,
    title: 'Cabo',
    year: 2017,
    summary: "Sean Brown's college graduation party",
    images: ['cabo1.jpg', 'cabo2.jpg']
  },
  {
    latitude: 64.128288,
    longitude: -21.827774,
    title: 'Iceland',
    year: 2018,
    summary: "Grant & Matt's stop in Iceland before the Northern Europe Cruise",
    images: [
      'il1.JPG',
      'il2.JPG',
      'il3.JPG',
      'il4.JPG',
      'il5.JPG',
      'il6.JPG',
      'il7.JPG',
      'il8.JPG',
      'il9.JPG',
      'il10.JPG',
      'il11.JPG',
      'il12.JPG',
    ]
  },
]

vacations.each do |vacation|
  record = Vacation.create! vacation.except(:images)
  vacation[:images].each do |i|
    File.open("#{Rails.root}/public/#{i}", 'r') do |file|
      image = ActionDispatch::Http::UploadedFile.new(tempfile: file)
      filename = Uploader.upload(image)
      record.photos.create!(filename: filename)
    end
  end
end
