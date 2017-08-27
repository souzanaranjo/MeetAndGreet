Rails.application.routes.draw do
  resources :home
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    devise_scope :user do
        
        
    authenticated :user do
      root 'home#index', as: :authenticated_root
    end
    unauthenticated :user do
      root 'home#index', as: :unauthenticated_root
    end
  end
end
