import React, { Component } from 'react';

const text1 = 'Hello world!';
const text2 = 'Another text.';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <Message />
        <div className="actions">
          <button className="btn">Text 1</button>
          <button className="btn">Text 2</button>
          <button className="btn">Clear</button>
        </div>
      </div>
    );
  }
}

export default Page;
