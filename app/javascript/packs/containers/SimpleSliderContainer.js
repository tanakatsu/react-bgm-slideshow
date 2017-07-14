import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import SimpleSlider from '../components/SimpleSlider'

class SimpleSliderContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentWillMount() {
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

    //this.props.actions.showLoading()
    this.props.actions.setPictures(pictures)
  }

  render() {
    let slider = null
    if (this.props.pictures.length > 0) {
      slider = <SimpleSlider pictures={this.props.pictures} />
    }

    return (
      <div>
        <div>
          {this.props.loading ? <span>Loading...</span> : null}
        </div>
        {slider}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pictures: state.pictures,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleSliderContainer)

