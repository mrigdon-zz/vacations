class Vacations::ImagesController < ApplicationController
  def destroy
    Vacation.find(params[:vacation_id]).images.find(params[:id]).purge_later
    render(json: nil)
  end
end
