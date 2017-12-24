class AdminController < ApplicationController
  layout 'application_admin'

  def dashboard
    render 'admin/index'
  end
end