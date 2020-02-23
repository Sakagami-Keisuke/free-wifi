Rails.application.routes.draw do
  get 'spots/index'

  root "spots#index"
end
