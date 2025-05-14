import React, { useState, useEffect } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]); // Logs when count changes

  return (
    <div className="app-container">
      <h1 className="title">Counter App</h1>
      <h3 className="count">Count: {count}</h3>
      <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="button" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="button" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;