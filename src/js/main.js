import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>This looks pretty boring...style it with JS!</div>
    );
  }
}

render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
