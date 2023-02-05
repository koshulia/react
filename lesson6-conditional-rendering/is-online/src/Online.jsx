import React, { Component } from 'react';

class Online extends Component {
  constructor(props) {
    super(props);
    this.onOnline = props.onOnline;
  }

  render() {
    return (
      <span className="status__text" onChange={this.onOnline}>
        All good!
      </span>
    );
  }
}
export default Online;
