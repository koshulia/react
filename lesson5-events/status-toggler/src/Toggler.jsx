import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off',
    };
  }

  toggle = e => {
    if (e.target.textContent === 'Off') {
      this.setState({
        text: (this.text = 'On'),
      });
    } else {
      this.setState({
        text: (this.text = 'Off'),
      });
    }
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
