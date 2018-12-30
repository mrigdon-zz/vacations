require 'rails_helper'

describe LocationService do
  # Commenting out since we don't want to be reliant on network
  # 
  # let(:iceland) { 'ChIJw-3c7rl01kgRcWDSMKIskew' }
  # let(:coordinates) { { "lat" => 64.146582, "lng" => -21.9426354 } }
  #
  # describe '#suggestions' do
  #   it 'returns suggested descriptions & ids from a query' do
  #     suggestion = described_class.suggestions('reyk')[0]
  #     expect(suggestion['description']).to be_a String
  #     expect(suggestion['place_id']).to be_a String
  #   end
  # end
  #
  # describe '#coordinates' do
  #   it 'returns the coordinates for a place' do
  #     result = described_class.coordinates(iceland)
  #     expect(result).to eq coordinates
  #   end
  # end
end
