import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'
import SlideImage from './SlideImage'

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)

    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
      centerMode: true,
      lazyLoad: true
    }

    return (
      <div className="slickContainer">
        <Slider {...settings}>
        {
          this.props.pictures.map((p) =>
                       <div key={p}><SlideImage url={p} height={this.state.height * 0.7} /></div>
                      )
        }
        </Slider>
      </div>
    )
  }
}

export default SimpleSlider
