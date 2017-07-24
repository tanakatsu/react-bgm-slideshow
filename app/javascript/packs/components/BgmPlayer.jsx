import React from 'react'
import PropTypes from 'prop-types'

class BgmPlayer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <iframe src={this.props.src} style={{position: "absolute", top: "-9999px", left: "-9999px"}}></iframe>
    )
  }
}

export default BgmPlayer
