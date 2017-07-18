import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import SimpleSlider from '../components/SimpleSlider'

class SimpleSliderContainer extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  componentWillMount() {
    this.props.actions.loadPictures()
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

