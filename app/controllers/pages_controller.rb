class PagesController < ApplicationController
  def home
    render 'pages/index'
  end

  def abouts
    render 'pages/abouts'
  end
end
