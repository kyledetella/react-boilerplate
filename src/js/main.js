import React from 'react'
import {render} from 'react-dom'
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router'

import About from './modules/About'
import App from './modules/App'
import Home from './modules/Home'
import Login from './modules/Login'
import Logout from './modules/Logout'
import Dashboard from './modules/Dashboard'
import Auth from './modules/Auth'

const requireAuth = (nextState, replace) => {
  if (!Auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname}
    })
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="about" component={About} />
      <Route
        path="dashboard"
        component={Dashboard}
        onEnter={requireAuth}
      />
    </Route>
  </Router>,
  document.body.appendChild(document.createElement('div'))
)
