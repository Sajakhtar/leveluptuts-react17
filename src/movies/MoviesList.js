import React, { useState, useRef } from "react";
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

  // useRef is a react hook, typically used to access DOM elements
  // const varName = useRef(initualValue);
  // Assign the ref to a html element, then you can access the DOM element's properties
  const ulRef = useRef(null);
  console.log(ulRef);
  const ref = useRef(null);

  return (
    <div ref={ulRef}>

      {/* useRef on an input is simpler than using useState and onChange to access value of the input.
      But it doesnt control rerenders and you don't have control on the content put in the input.
      Fine to useRef with forms, but trypically most devs useState for controlled inputs/forms
      */}
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(ref.current.value)
      }}>
        <input ref={ref} />
        <button>log value</button>
      </form>

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
