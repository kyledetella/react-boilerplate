import React from 'react';
import NavLink from './NavLink';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Routing</h1>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
