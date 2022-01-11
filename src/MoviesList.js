import React, { useState } from "react";

const movies = [
  { name: "The Godfather", id: 1},
  { name: "Jurassic Park", id: 2},
  { name: "Green Book", id: 3},
  { name: "Dune", id: 4},
]

export function MoviesList() {
  return (
    <div>
      <ul>
        {/* <li>Spiderman</li>
        <li>Ironman</li>
        <li>Batman</li>
        <li>Superman</li> */}

        {movies.map((movie) => {
          return (
            <li key={movie.id}>{movie.name}</li>
          )
        })}
      </ul>
    </div>
  )
}
