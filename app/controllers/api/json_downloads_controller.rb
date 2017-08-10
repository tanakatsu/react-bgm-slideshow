require 'open-uri'

class Api::JsonDownloadsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    url = params[:url]
    head :bad_request and return if url.blank?

    json_str = "{}"
    open(url) do |f|
      json_str = f.read
    end

    render json: JSON.parse(json_str)
  end
end
