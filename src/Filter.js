import React from 'react';

// lifting state from MovieList by passing the state and setState as props
export function Filter({ filter, setFilter }) {
  return (
    <label>
      Search Movies <br/>
      <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
    </label>

  )
}
