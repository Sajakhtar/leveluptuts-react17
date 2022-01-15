import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// useParams is 3rd party hook
import { useParams } from 'react-router-dom';


const key = process.env.REACT_APP_TMDB_KEY;

export function MovieDetail() {

  const [ movie, setMovie ] = useState({});

  const { id } = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;

  const getMovie = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovie(data);
      // console.log(movie);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  )
}
