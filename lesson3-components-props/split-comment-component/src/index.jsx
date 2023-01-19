import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './comment.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};

ReactDOM.render(<Comment user={userInfo} text="Good job!" date={new Date()} />, rootElement);
