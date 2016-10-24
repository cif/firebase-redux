import React from 'react';

export const Counter = (props) => {
  const { count, onClick } = props;
  return (
    <div>
      <h1>The count: {count}</h1>
      <button onClick={() => { onClick(count + 1) }}>Increment</button>
      <button onClick={() => { onClick(count - 1) }}>Decrement</button>
    </div>
  )
}

export default Counter;
