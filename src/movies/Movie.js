import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Movie({ movie, config }) {

  // useEffect(() => {
  //   console.log(movie.name);
  // }, []);


  return (
    <li>
      <Link to="/details">
        { config.images?.base_url && (
          <img src={config.images.base_url + config.images.poster_sizes[3] + movie.poster_path} alt={movie.title + " Poster"} />
          )}
        <h3>{movie.title}</h3>
      </Link>
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
