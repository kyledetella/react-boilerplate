import React from 'react';
import {render} from 'react-dom';
import Picker from './modules/Picker';

class App extends React.Component {
  render() {
    const options = ['ios', 'android', 'web'];

    return (
      <div>
        <h1>Pick one</h1>
        <Picker options={options} />
      </div>
    );
  }
}

render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
