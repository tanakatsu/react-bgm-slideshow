Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'page/slick'
  get 'page/login' => 'page#slick'

  namespace :api do
    resources :pictures, only: [:index]
  end

  root to: 'page#slick'
end
