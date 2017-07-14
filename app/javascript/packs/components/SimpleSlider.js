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
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <Slider {...settings}>
      {
        this.props.pictures.map((p) => 
                     <div key={p}><SlideImage url={p} /></div>
                    )
      }
      </Slider>
    )
  }
}

export default SimpleSlider