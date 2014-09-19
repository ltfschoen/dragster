Rails.application.routes.draw do
  devise_for :users
  root :to => 'areas#index'
  # allows refresh page on routes without rails 
  # confusing a client side refresh with a request
  # for a resource
  get '*path' => 'areas#index'
end
