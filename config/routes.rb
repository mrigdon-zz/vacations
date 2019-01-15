Rails.application.routes.draw do
  root 'vacations#index'
  resources :locations, only: [:show, :index]
  resources :vacations, only: [:update, :create, :destroy] do
    resources :images, only: [:destroy, :create], controller: 'vacations/images'
  end
end
