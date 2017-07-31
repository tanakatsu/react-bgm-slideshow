import React from 'react'
import PropTypes from 'prop-types'

import BgmPlayer from './BgmPlayer'

class BgmSelector extends React.Component {
  constructor(props) {
    super(props)

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
    this.search(this.state.keyword)
  }

  onStopped() {
    this.setState({playing: false, message: null})
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

        const url = `https://www.youtube.com/embed/${data[0].id}?autoplay=1`
        const msg = `Now bgm playing (${data[0].title})`
        this.setState({playing: true, bgm_url: url, message: msg})
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
