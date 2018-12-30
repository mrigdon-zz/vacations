class VacationsController < ApplicationController
  def index
    @vacations = Vacation.all
  end

  def update
    vacation = Vacation.find(params[:id])
    vacation.update(vacation_params)
  end

  private

  def vacation_params
    params.require(:vacation).permit(images: [])
  end
end
