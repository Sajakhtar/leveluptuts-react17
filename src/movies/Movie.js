import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export function Movie({ movie }) {

  // useEffect(() => {
  //   console.log(movie.name);
  // }, []);


  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title + " Poster"} />
      <h3>{movie.title}</h3>
    </li>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired
  }).isRequired
}
