import React from 'react';
import ForwardCounter from './components/ForwardCounter';
import BackwardCounter from './components/BackwardCounter';

const Counter = () => {
  return (
      <>
          <ForwardCounter />
          <BackwardCounter />
      </>
  );
};

export default Counter;