import React, { useState } from "react";
import { Movie } from './Movie';
import { Filter } from '../Filter';

const movies = [
  { name: "The Godfather", id: 1},
  { name: "Jurassic Park", id: 2},
  { name: "Green Book", id: 3},
  { name: "Dune", id: 4},
  { name: "Spiderman", id: 5},
  { name: "Harry Potter", id: 6},
  { name: "Batman", id: 7},
  { name: "Toy Story", id: 8},
  { name: "Venom", id: 9},
  { name: "Apollo 13", id: 10},
]

export function MoviesList() {

  const [ filter, setFilter ] = useState("");

  return (
    <div>
      {/* <label>
        Search Movies <br/>
        <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </label> */}

      <Filter filter={filter} setFilter={setFilter} />
      {/* lifting state from MovieList by passing the state and setState as props
      MovieList is the parent, and Parent needs to own the state
      State flows downwards from Parent to Child in component tree
      useContext Hook is the alternative, to manipulate state from anywhere in component tree */}

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

        {/* {movies
          .filter((movie) => movie.name.toLowerCase().includes(filter.toLowerCase()))
          .map((movie) => (<li key={movie.id}>{movie.name}</li>))
        } */}

        {movies
          .filter((movie) => movie.name.toLowerCase().includes(filter.toLowerCase()))
          .map((movie) => (<Movie key={movie.id} movie={movie}/>))
        }
      </ul>
    </div>
  )
}
