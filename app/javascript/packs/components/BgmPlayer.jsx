import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import MobileDetect from 'mobile-detect'

class BgmPlayer extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  _onReady(event) {
    const md = new MobileDetect(window.navigator.userAgent);
    console.log(md.mobile());

    if (!md.mobile()) {
      event.target.playVideo();
    }
  }

  _onPlay(event) {
    this.props.onStarted()
  }

  render() {
    const opts = {
      width: '40',
      height: '30',
      playerVars: {
        showinfo: 0,
        controls: 2,
        modestbranding: 0,
        playsinline: 1,
      },
    }

    const pos = {
      position: "relative",
      display: this.props.visible ? "block" : "none"
    }

    return (
      <div style={pos}>
        <YouTube
          videoId={this.props.video_id}
          opts={opts}
          onReady={this._onReady}
          onPlay={this._onPlay.bind(this)}
        />
      </div>
    )
  }
}

export default BgmPlayer
