import React, { useState } from "react";
// React Hooks are prefixed with 'use'
// useState is a React Hook
// State is data that live in component, data updates (dynamic) and allows component to be interactive
// State could be data from a DB, or accordion/ modal is open or not

export function Counter({  }) {

  // value of state and updater of state
  // set default state of count to zero
  //  const [ state, setState ] = useState(defaultState);
  const [ count, setCount ] = useState(0);

  return (
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count - 1)} >-</button>
        <button onClick={() => setCount(count + 1)} >+</button>
      </div>
  );
}
