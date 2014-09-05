class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # force redirect to login page if user not logged in
  before_action :authenticate_user!

  before_filter :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    custom_fields = %i(provider uid location name)
    devise_parameter_sanitizer.for(:sign_up) << custom_fields
    devise_parameter_sanitizer.for(:account_update) << custom_fields
  end
end
