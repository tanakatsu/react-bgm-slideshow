import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import SimpleSlider from '../components/SimpleSlider'
import BgmSelector from '../components/BgmSelector'

class SimpleSliderContainer extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  componentWillMount() {
    if (!this.props.authed) {
      console.log('not authenticated')
      this.props.history.push('/page/login')
    }
  }

  componentDidMount() {
    if (this.props.authed) {
      this.props.actions.loadPictures()
    }
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
        <BgmSelector />
        {slider}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pictures: state.pictures,
    loading: state.loading,
    authed: state.login
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

