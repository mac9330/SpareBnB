Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :spots, only: [:index, :show, :create]
    resources :reviews, only: [:create]
    resources :reservations, only: [:create, :index, :destroy]
  end

  
end


























  # namespace :api, defaults: {format: :json} do
  #   resources :benches, only: [:index, :show, :create]
  #   resources :reviews, only: [:create]
  #   resource :user, only: [:create]
  #   resource :session, only: [:create, :destroy, :show]
  #   resource :favorites, only: [:create, :destroy]
  # end