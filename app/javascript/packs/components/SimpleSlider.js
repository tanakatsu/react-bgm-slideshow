import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'
import SlideImage from './SlideImage'

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: true,
      lazyLoad: true
    }

    return (
      <div className="slickContainer">
        <Slider {...settings}>
        {
          this.props.pictures.map((p) =>
                       <div key={p}><SlideImage url={p} /></div>
                      )
        }
        </Slider>
      </div>
    )
  }
}

export default SimpleSlider
