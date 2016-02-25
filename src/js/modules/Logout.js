import React from 'react'
import Auth from './Auth';

class Logout extends React.Component {
  componentDidMount() {
    Auth.logout();
  }

  render() {
    return (
      <p>Bye</p>
    )
  }
}

export default Logout
