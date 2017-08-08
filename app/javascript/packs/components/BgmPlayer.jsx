import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'

class BgmPlayer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const opts = {
      playerVars: {
        autoplay: 1
      }
    }
    return (
      <div style={{position: "absolute", top: "-9999px", left: "-9999px"}}>
        <YouTube
          videoId={this.props.video_id}
          opts={opts}
        />
      </div>
    )
  }
}

export default BgmPlayer
