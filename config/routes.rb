Rails.application.routes.draw do
  devise_for :users
  root to: 'spots#index'

  resources :users, only: [:edit, :update]

  resources :spots, only: [:index, :new, :create ]
  

  resources :testsessions, only: :create

end
