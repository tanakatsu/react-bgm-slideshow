// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Slider from 'react-slick'

class SimpleSlider extends React.Component {
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

    const picture_names = [
      "HU001_72A.jpg",
      "HU002_72A.jpg",
      "HU003_72A.jpg",
      "HU004_72A.jpg",
      "HU005_72A.jpg",
      "HU006_72A.jpg",
      "HU007_72A.jpg",
      "HU008_72A.jpg",
      "HU009_72A.jpg",
      "HU010_72A.jpg",
      "HU011_72A.jpg",
      "HU012_72A.jpg",
      "HU013_72A.jpg",
      "HU014_72A.jpg",
      "HU015_72A.jpg",
      "HU016_72A.jpg",
      "HU017_72A.jpg",
      "HU018_72A.jpg",
      "HU019_72A.jpg",
      "HU020_72A.jpg",
    ]

    const pictures = picture_names.map((p) => {
      return `/images/slick/${p}`
    })

    return (
      <Slider {...settings}>
        {
          pictures.map((p) => 
                       <div key={p}><SlideImage url={p} /></div>
                      )
        }
      </Slider>
    )
  }
}

const SlideImage = props => (
  <div><img src={props.url} /></div>
)

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SimpleSlider />,
    document.body.appendChild(document.createElement('div')),
  )
})
