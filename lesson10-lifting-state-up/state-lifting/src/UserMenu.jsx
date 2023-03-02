import React, { Component } from 'react';

class UserMenu extends Component {
  render() {
    const { userData } = this.props;

    if (!userData) {
      return null;
    }

    const { avatar_url, name } = userData;

    return (
      <div className="menu">
        <span className="menu__greeting"> {name} </span>
        <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

export default UserMenu;
