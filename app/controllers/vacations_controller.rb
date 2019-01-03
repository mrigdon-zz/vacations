class VacationsController < ApplicationController
  before_action :set_vacation, only: [:update, :destroy]

  def index
    @vacations = Vacation.all
  end

  def update
    @vacation.update(vacation_params)
  end

  def create
    vacation = Vacation.new(vacation_params)
    if vacation.save
      render(json: vacation.to_h)
    else
      render(json: vacation.errors, status: :bad_request)
    end
  end

  def destroy
    @vacation.destroy
    render(json: nil)
  end

  private

  def set_vacation
    @vacation = Vacation.find(params[:id])
  end

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
