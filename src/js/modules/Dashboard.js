import React from 'react'
import Auth from './Auth'

class Dashboard extends React.Component {
  render() {
    const token = Auth.getToken()

    return (
      <div>
        <h2>Dashboard</h2>
        <p>{token}</p>
      </div>
    )
  }
}

export default Dashboard
