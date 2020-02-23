Rails.application.routes.draw do
  get 'spots/index'
  root to: 'spots#index'
  resources :spots, only: [:index]
end
