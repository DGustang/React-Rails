class AdminController < ApplicationController
  layout 'application_admin'

  def dashboard
    render 'admin/index'
  end

  def transaction
    render 'admin/transaction/index'
  end

  def historytransaction
    render 'admin/history/index'
  end
end