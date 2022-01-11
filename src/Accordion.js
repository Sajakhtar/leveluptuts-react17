import React, { useState } from "react";
// React Hooks are prefixed with 'use'
// useState is a React Hook
// State is data that live in component, data updates (dynamic) and allows component to be interactive
// State could be data from a DB, or accordion/ modal is open or not

export function Accordion() {

  //  const [ state, setState ] = useState(defaultState);
  const [ isToggled, setIsToggled ] = useState(false);

  const showMe = isToggled ? (<h3>Show me</h3>) : null;

  return (
      <div>
        {/* most commong approach */}
        {/* { isToggled && <h3>Show me</h3> } */}

        {/* other approaches */}
        {/* { isToggled ? <h3>Show me</h3> : null} */}
        {showMe}
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      </div>
  );
}
