class Vacations::ImagesController < ApplicationController
  before_action :set_vacation, only: [:destroy, :create]

  def destroy
    @vacation.images.find(params[:id]).purge_later
    render(json: nil)
  end

  def create
    filename = Uploader.upload(params[:file])
    image = @vacation.photos.create(filename: filename)
    render(json: image.to_h)
  end

  private

  def set_vacation
    @vacation = Vacation.find(params[:vacation_id])
  end
end
