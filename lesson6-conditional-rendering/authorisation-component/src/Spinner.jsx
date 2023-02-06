import React, { Component } from 'react';

class Spinner extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isLoggedIn: false,
    // };

    this.size = props.size;
  }

  render() {
    return <span className="spinner" style={{ width: this.size, height: this.size }}></span>;
  }
}

export default Spinner;
