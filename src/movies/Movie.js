import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export function Movie({ movie, config }) {

  // useEffect(() => {
  //   console.log(movie.name);
  // }, []);


  return (
    <li>
      { config.images?.base_url && (
        <img src={config.images.base_url + config.images.poster_sizes[1] + movie.poster_path} alt={movie.title + " Poster"} />
      )}
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
