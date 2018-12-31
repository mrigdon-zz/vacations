class VacationsController < ApplicationController
  def index
    @vacations = Vacation.all
  end

  def update
    vacation = Vacation.find(params[:id])
    vacation.update(vacation_params)
  end

  def create
    vacation = Vacation.new(vacation_params)
    render(json: vacation.to_h)
  end

  private

  def vacation_params
    params.require(:vacation).permit(
      :title,
      :year,
      :summary,
      :latitude,
      :longitude,
      images: []
    )
  end
end
