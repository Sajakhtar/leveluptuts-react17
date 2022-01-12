import React from 'react';

// lifting state from MovieList by passing the state and setState as props
// MovieList is the parent, and Parent needs to own the state
// State flows downwards from Parent to Child in component tree
// useContext Hook is the alternative, to manipulate state from anywhere in component tree
export function Filter({ filter, setFilter }) {
  return (
    <label>
      Search Movies <br/>
      <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
    </label>

  )
}
