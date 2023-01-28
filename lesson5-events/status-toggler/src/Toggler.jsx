import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off',
    };
  }

  toggle = () => {
    this.setState({
      text: (this.text = 'On'),
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.toggle}>
        {this.state.text}
      </div>
    );
  }
}

export default Toggler;
