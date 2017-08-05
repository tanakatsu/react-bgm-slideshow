require 'open-uri'

class Api::YoutubeSearchesController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    q = params[:q]
    render json: [] and return if q.blank?

    url = "https://www.youtube.com/results?search_query=#{URI.escape(q)}"
    #url = "https://www.youtube.com/results?search_query=%E6%B3%A2%E4%B9%97%E3%82%8A%E3%82%B8%E3%83%A7%E3%83%8B%E3%83%BC"

    results = []
    open(url) do |f|
      charset = f.charset
      html = f.read
      doc = Nokogiri::HTML.parse(html, nil, charset)

      contents = doc.css("ol.item-section li")
      results = contents.map do |content|
        if content.css("div.yt-lockup") && content.css("div.yt-lockup").length > 0 && content.css("div.yt-lockup")[0].attribute('data-context-item-id')
          id = content.css("div.yt-lockup")[0].attribute("data-context-item-id").value
          title = content.css("div.yt-lockup-content h3 a")[0].attribute("title").value
          {id: id, title: title}
        end
      end
      results = results.compact
    end

    render json: results
  end
end
