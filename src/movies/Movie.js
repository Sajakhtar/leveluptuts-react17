import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export function Movie({ movie }) {

  useEffect(() => {
    console.log(movie.name);
  }, []);


  return (
    <li>{movie.name}</li>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
}
