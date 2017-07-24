import React from 'react'
import PropTypes from 'prop-types'

import BgmPlayer from './BgmPlayer'

class BgmSelector extends React.Component {
  constructor(props) {
    super(props)
    this.url = "https://www.youtube.com/embed/B2fPYlGKdXM?autoplay=1"

    this.state = {
      keyword: 'AI - Story',
      playing: false,
      message: null,
      bgm_url: null
    }

    this.onTextChanged = this.onTextChanged.bind(this)
    this.onSelected = this.onSelected.bind(this)
    this.onStopped = this.onStopped.bind(this)
  }

  onTextChanged(e) {
    this.setState({keyword: e.target.value})
  }

  onSelected() {
    this.setState({playing: true, 
                  message: "Now bgm playing",
                  bgm_url: this.url
    })
  }

  onStopped() {
    this.setState({playing: false, message: null})
  }

  render() {
    let selectorBox = null

    if (!this.state.playing) {
      selectorBox = <div><input type="text" size="30" value={this.state.keyword} onChange={this.onTextChanged} disabled={this.state.playing} />
        <input type="button" value="Select" onClick={this.onSelected} /></div>
    }

    return (
      <div>
        { selectorBox }
        <span> {this.state.message} </span>
        { this.state.playing &&
            <input type="button" value="Stop" onClick={this.onStopped} />
        }
        { this.state.playing &&
            <BgmPlayer src={this.state.bgm_url} />
        }
      </div>
    )
  }
}

export default BgmSelector
