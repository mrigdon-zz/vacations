require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  it 'renders index' do
    get :index
    expect(response).to have_http_status(:ok)
  end
end
