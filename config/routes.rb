Rails.application.routes.draw do
  get '/',                    to: 'pages#home'
  get '/abouts',              to: 'pages#abouts'

  get '/dashboard',           to: 'admin#dashboard'
  get '/transaction',         to: 'admin#transaction'
  get '/history-transaction', to: 'admin#historytransaction'
end
