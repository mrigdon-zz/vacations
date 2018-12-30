module LocationService
  KEY = ENV.fetch('GOOGLE_MAPS_KEY')
  BASE_URL = 'https://maps.googleapis.com/maps/api/place'

  extend self

  def suggestions(query)
    response = json_get(suggestions_url(query))
    predictions = response['predictions']
    predictions.map { |p| p.slice('description', 'place_id') }
  end

  def coordinates(id)
    response = json_get(location_url(id))
    response['result']['geometry']['location']
  end

  private

  def suggestions_url(query)
    url('autocomplete', { types: '(cities)', input: query })
  end

  def location_url(id)
    url('details', { fields: 'geometry', placeid: id })
  end

  def url(endpoint, params)
    "#{BASE_URL}/#{endpoint}/json?key=#{KEY}&#{params.to_query}"
  end

  def json_get(url)
    response = RestClient.get(url)
    JSON.parse(response.body)
  end
end
