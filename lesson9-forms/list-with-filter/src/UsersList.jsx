import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  state = {
    filter: '',
  };

  onInput = event => {
    const text = event.target.value.toLowerCase();
    this.setState({
      filter: text,
    });
  };

  render() {
    let listToDisplay;
    if (this.state.filter) {
      listToDisplay = this.props.users.filter(user =>
        user.name.toLowerCase().includes(this.state.filter),
      );
    } else {
      listToDisplay = this.props.users;
    }

    return (
      <div>
        <Filter
          count={listToDisplay.length}
          onChange={this.onInput}
          filterText={this.state.filter}
        />
        {listToDisplay.map(user => (
          <User {...user} key={user.id} />
        ))}
      </div>
    );
  }
}

export default UsersList;
