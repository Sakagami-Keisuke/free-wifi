class TestsessionsController < ApplicationController
  def create
    user=User.find_by(name:test,email:"test@test.com",encrypted_password:test0000)
    session[:user_id] = user.id
    flash[:success] = "テストユーザとしてログインしました。"
    redirect_to user
  end
end