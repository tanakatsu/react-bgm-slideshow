class Api::PicturesController < ApplicationController
  def index
    pictures = Dir.glob("public/images/slick/*")
    pictures = pictures.map { |p| p.gsub(/\Apublic/, "") }

    render json: pictures
  end
end
