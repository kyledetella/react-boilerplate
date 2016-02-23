import React from 'react';

class Picker extends React.Component {
  render() {
    let selectList;
    const {options} = this.props;

    if (options.length) {
      selectList = (
        <select>{
          options.map(value => <option value={value}>{value}</option>)
        }</select>
      );
    }

    return (
      <div>{selectList}</div>
    )
  }
}

Picker.defaultProps = {
  options: []
}

export default Picker
