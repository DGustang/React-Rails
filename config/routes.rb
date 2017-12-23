Rails.application.routes.draw do
  get '/',                    to: 'pages#home'
  get '/abouts',              to: 'pages#abouts'
end
