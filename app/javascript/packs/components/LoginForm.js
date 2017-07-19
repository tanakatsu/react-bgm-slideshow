import React from 'react'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
    this.state = { formValid: false }
  }

  handleChange() {
    if (this.inputUserId.value.length > 0 
        && this.inputPassword.value.length > 0) {
      this.setState({ formValid: true })
    } else {
      this.setState({ formValid: false })
    }
  }

  render() {
    return (
      <div>
        <div>
          User ID <input type="text" ref={(input) => { this.inputUserId = input }} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          Password <input type="password" ref={(input) => { this.inputPassword = input }} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <input type="submit" value="Login" disabled={!this.state.formValid} onClick={() => this.props.history.push('/page/slick')}/>
        </div>
      </div>
    )
  }
}

export default LoginForm
