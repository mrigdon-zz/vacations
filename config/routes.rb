Rails.application.routes.draw do
  root 'vacations#index'
  resources :vacations, only: [:update, :create, :destroy]
  resources :locations, only: [:show, :index]
end
