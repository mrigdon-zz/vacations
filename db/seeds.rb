# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

vacations = [
  {
    latitude: 48.856614,
    longitude: 2.352222,
    title: 'Paris',
    year: 2013
  },
  {
    latitude: 40.712775,
    longitude: -74.005973,
    title: 'New York',
    year: 2018
  },
  {
    latitude: 49.282729,
    longitude: -123.120738,
    title: 'Vancouver',
    year: 2017
  }
]

vacations.each do |vacation|
  Vacation.create! vacation
end
