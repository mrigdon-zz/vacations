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
]

vacations.each do |vacation|
  record = Vacation.create! vacation.except(:images)
  vacation[:images].each do |i|
    record.images.attach(
      io: File.open("#{Rails.root}/public/#{i}"),
      filename: i
    )
  end
end
