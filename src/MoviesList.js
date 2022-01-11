import React, { useState } from "react";

const movies = [
  { name: "The Godfather", id: 1},
  { name: "Jurassic Park", id: 2},
  { name: "Green Book", id: 3},
  { name: "Dune", id: 4},
]

export function MoviesList() {

  const [ filter, setFilter ] = useState("");

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
      <ul>
        {/* <li>Spiderman</li>
        <li>Ironman</li>
        <li>Batman</li>
        <li>Superman</li> */}

        {/* {movies.map((movie) => {
          return (
            <li key={movie.id}>{movie.name}</li>
          )
        })} */}

        {movies
          .filter((movie) => movie.name.toLowerCase().includes(filter.toLowerCase()))
          .map((movie) => (<li key={movie.id}>{movie.name}</li>))
        }
      </ul>
    </div>
  )
}
