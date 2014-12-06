'use strict';

var React = require('react');

var Hello = React.createClass({
  render: function () {
    return (
      <p>Good tidings!</p>
    );
  }
});

React.renderComponent(<Hello />, document.body);
