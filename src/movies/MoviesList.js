import React, { useState, useRef,  useEffect } from "react";
import { Movie } from './Movie';
import { Filter } from '../Filter';




// const movies = [
//   { name: "The Godfather", id: 1},
//   { name: "Jurassic Park", id: 2},
//   { name: "Green Book", id: 3},
//   { name: "Dune", id: 4},
//   { name: "Spiderman", id: 5},
//   { name: "Harry Potter", id: 6},
//   { name: "Batman", id: 7},
//   { name: "Toy Story", id: 8},
//   { name: "Venom", id: 9},
//   { name: "Apollo 13", id: 10},
// ]

const key = process.env.REACT_APP_TMDB_KEY;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${key}`

export function MoviesList() {

  const [ filter, setFilter ] = useState("");
  const [ movies, setMovies ] = useState([]);
  const [ config, setConfig ] = useState({});

  // useEffect hook is the ability to trigger side effects
  // allows us to tap into component render cycle (lifecfyle methods)
  // components update when state changes or props change
  // useful when getting data from an API, i.e. when component loads, we want to fetch data from an API, thens save that data in sate, then display that state

  // Every time the MoviesList component renders, the useEffect will fire
  // can tell useEffect when to run with an array containing the effects dependancy
  // useEffect(() => {}, [])
  // empty array means effect will fire on first render i.e. on-mount and when something else is rendered in the DOM, but not when component is updated
  // useEffect(() => {}, [filter]) will only fire when filter updates
  // useEffect(() => {
  //   console.log('hit effect');
  // }, [filter]);

  // useRef is a react hook, typically used to access DOM elements
  // const varName = useRef(initualValue);
  // Assign the ref to a html element, then you can access the DOM element's properties
  // const ulRef = useRef(null);
  // console.log(ulRef);
  // const ref = useRef(null);

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data.results);
      // console.log('movies', movies);
    } catch (e) {
      console.error(e);
    }
  }

    const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL);
      const data = await res.json();
      setConfig(data);
    } catch (e) {
      console.error(e);
    }
  }

  // getMovies() on initial page load / on-mount
  // can't place getMovites() outside use effect, else it'll hit the API every time this component rerenders
  useEffect(() => {
    getConfig();
    getMovies();
  }, []);

  return (
    // <div ref={ulRef}>
    <div>

      {/* useRef on an input is simpler than using useState and onChange to access value of the input.
      But it doesnt control rerenders and you don't have control on the content put in the input.
      Fine to useRef with forms, but trypically most devs useState for controlled inputs/forms
      */}
      {/* <form onSubmit={(e) => {
        e.preventDefault();
        console.log(ref.current.value)
      }}>
        <input ref={ref} />
        <button>log value</button>
      </form> */}

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

        {/* {movies
          .filter((movie) => movie.name.toLowerCase().includes(filter.toLowerCase()))
          .map((movie) => (<Movie key={movie.id} movie={movie}/>))
        } */}

        {movies
          .filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()))
          .map((movie) => (<Movie key={movie.id} config={config} movie={movie}/>))
        }
      </ul>
    </div>
  )
}
