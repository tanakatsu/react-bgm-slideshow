require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get slick" do
    get page_slick_url
    assert_response :success
  end

end
