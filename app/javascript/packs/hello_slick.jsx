// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'

import rootReducers from './reducers'
import SimpleSliderContainer from './containers/SimpleSliderContainer'
import LoginForm from './components/LoginForm'

let store = createStore(rootReducers, applyMiddleware(thunk))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/page/slick" component={SimpleSliderContainer} />
          <Route path="/page/login" component={LoginForm} />
          <Route exact path="/" component={LoginForm} />
        </Switch>
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
