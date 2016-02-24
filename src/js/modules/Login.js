import React from 'react'
import Auth from './Auth'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {error: false}
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label><input ref="email" placeholder="email" defaultValue="foo@bar.com" /></label>
        <label><input ref="pass" placeholder="password" /></label> (hint: pwd)<br />
        <button type="submit">login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    )
  }

  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    Auth.login(email, pass).then((loggedIn) => {
      if (!loggedIn) {
        this.setState({error: true})
        return
      }

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
    .catch(() => {
      this.setState({error: true})
    })
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Login
