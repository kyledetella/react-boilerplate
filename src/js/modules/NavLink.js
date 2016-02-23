import React from 'react';
import {Link} from 'react-router';
import {activeStyle} from '../styles';

class NavLink extends React.Component {
  render() {
    return (
      <Link {...this.props} activeStyle={activeStyle} />
    );
  }
}

export default NavLink;
