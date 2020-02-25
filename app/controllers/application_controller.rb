class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end


# application_controllerにbefore_actionを使用しているため、全てのアクションが実行される前に、この部分が実行されることになります。deviseのコントローラーから呼び出された場合は、「configure_permitted_parameters」メソッドが呼ばれます。
# ここでconfigure_permitted_parametersの定義を行なっています。
# deviseをインストールすることでdevise_parameter_sanitizerのpermitメソッドが使えるようになりますが、これがストロングパラメータに該当する機能です。サインアップ時に入力された「name」キーの内容の保存を許可しています。
