class VacationsController < ApplicationController
  def index
    @vacations = Vacation.all
  end
end
