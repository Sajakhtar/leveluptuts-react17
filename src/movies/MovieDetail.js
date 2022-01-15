import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// useParams is 3rd party hook
import { useParams } from 'react-router-dom';

export function MovieDetail() {

  const { id } = useParams();

  return (
    <div>
      <h1>Movie Detail {id}</h1>
    </div>
  )
}
