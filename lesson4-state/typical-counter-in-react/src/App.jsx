import React from 'react';
import Counter from './Counter';

const App = () => (
  <>
    <Counter start={17} interval={1000} />
    <Counter start={-50} interval={100} />
    <Counter start={5} interval={2000} />
  </>
);

export default App;
