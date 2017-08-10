import React from 'react'
import PropTypes from 'prop-types'

import BgmPlayer from './BgmPlayer'

class BgmSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: 'AI - Story',
      loaded: false,
      playing: false,
      video_title: null,
      video_id: null,
      message: null,
    }

    this.onTextChanged = this.onTextChanged.bind(this)
    this.onSelected = this.onSelected.bind(this)
    this.onStopped = this.onStopped.bind(this)
    this.onLoaded = this.onLoaded.bind(this)
    this.onStarted = this.onStarted.bind(this)
  }

  onTextChanged(e) {
    this.setState({keyword: e.target.value})
  }

  onSelected() {
    this.search(this.state.keyword)
  }

  onStopped() {
    this.setState({playing: false, loaded: false, message: null})
  }

  onLoaded() {
    const msg = `Ready for play (${this.state.video_title})`
    this.setState({loaded: true, message: msg})
  }

  onStarted() {
    const msg = `Now playing (${this.state.video_title})`
    this.setState({playing: true, message: msg})
  }

  search(word) {
    const url = "/api/youtube_search"
    let formData = new FormData();
    formData.append("q", word)

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        console.log(data[0])

        this.setState({video_id: data[0].id, video_title: data[0].title})
        this.onLoaded()
      } else {
        this.setState({message: 'Not found'})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    let selectorBox = null

    if (!this.state.loading && !this.state.playing) {
      selectorBox = <div><input type="text" size="30" value={this.state.keyword} onChange={this.onTextChanged} />
        <input type="button" value="Select" onClick={this.onSelected} /></div>
    }

    return (
      <div>
        { selectorBox }
        <span> {this.state.message} </span>
        { this.state.loaded &&
            <BgmPlayer video_id={this.state.video_id} visible={!this.state.playing} onStarted={this.onStarted} />
        }
        { this.state.playing &&
            <input type="button" value="Stop" onClick={this.onStopped} />
        }
      </div>
    )
  }
}

export default BgmSelector
