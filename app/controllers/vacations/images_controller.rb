class Vacations::ImagesController < ApplicationController
  before_action :set_vacation, only: [:destroy, :create]

  def destroy
    @vacation.photos.find(params[:id]).destroy
    render(json: nil)
  end

  def create
    image = @vacation.photos.upload(params[:file])
    render(json: image.to_h)
  end

  private

  def set_vacation
    @vacation = Vacation.find(params[:vacation_id])
  end
end
