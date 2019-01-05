Rails.application.routes.draw do
  root 'vacations#index'
  resources :locations, only: [:show, :index]
  resources :vacations, only: [:update, :create, :destroy] do
    delete '/images/:image_id', on: :member, to: 'vacations#destroy_image'
  end
end
