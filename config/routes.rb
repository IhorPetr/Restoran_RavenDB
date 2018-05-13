Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :ingredients
  resources :sections
  resources :dishes
  resources :orders
  resources :supplement_orders
  resources :compositions
end
