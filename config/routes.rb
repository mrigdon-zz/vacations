Rails.application.routes.draw do
  root 'vacations#index'
  resources :vacations, only: [:update, :create]
  resources :locations, only: [:show, :index]
end
