class LocationsController < ApplicationController
  def index
    locations = LocationService.suggestions(params[:query])
    render(json: locations)
  end

  def show
    location = LocationService.coordinates(params[:id])
    render(json: location)
  end
end
