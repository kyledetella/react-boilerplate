import React from 'react';
import NavLink from './NavLink';
import Auth from './Auth';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: Auth.loggedIn()
    }

    Auth.onChange = (loggedIn) => {
      this.setState({loggedIn})
    }
  }

  render() {
    return (
      <div>
        <h1>Routing</h1>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li>
            {this.state.loggedIn ? (
              <NavLink to="/logout">Logout</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>

        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in</p>}
      </div>
    );
  }
}

export default App;
