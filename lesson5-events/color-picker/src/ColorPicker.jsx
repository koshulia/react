import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
    };
  }

  getColorName = colorName => {
    this.setState({
      colorName: (this.colorName = colorName),
    });
  };

  clear = () => {
    this.setState({
      colorName: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            onMouseEnter={() => this.getColorName(CORAL)}
            onMouseLeave={this.clear}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.getColorName(AQUA)}
            onMouseLeave={this.clear}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.getColorName(BISQUE)}
            onMouseLeave={this.clear}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
