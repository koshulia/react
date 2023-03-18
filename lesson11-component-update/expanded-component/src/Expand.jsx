import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Expand extends Component {
  state = {
    isShown: false,
  };

  toggleExpansion = () => {
    this.setState({
      isShown: !this.state.isShown,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleExpansion}>
            {this.state.isShown ? (
              <FontAwesomeIcon icon={solid('chevron-up')} />
            ) : (
              <FontAwesomeIcon icon={solid('chevron-down')} />
            )}
          </button>
          {/* <button className="expand__toggle-btn" onClick={this.toggleExpansion}>
            {this.state.isShown ? (
               <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </button> */}
        </div>
        {this.state.isShown ? <div className="expand__content">{this.props.children}</div> : null}
      </div>
    );
  }
}

// Expand.propTypes = {
//   isOpen: PropTypes.bool,
//   children: PropTypes.element.isRequired,
//   title: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
// };

// Expand.defaultProps = {
//   isOpen: false,
//   title: '',
// };

export default Expand;
