import React from 'react';

class Testing extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
  }
  render() {
    return (<a href="" onClick={this.handleClick}>hello</a>);
  }
}
export default Testing;
