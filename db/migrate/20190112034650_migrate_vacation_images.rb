class MigrateVacationImages < ActiveRecord::Migration[5.2]
  def up
    Vacation.all.each do |vacation|
      vacation.images.each do |image|
        vacation.photos.create(filename: image.key + '.jpeg')
      end
    end
  end

  def down
    Vacation.all.each do |vacation|
      vacation.photos.destroy_all
    end
  end
end
