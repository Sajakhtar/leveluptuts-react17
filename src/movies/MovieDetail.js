import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// useParams is 3rd party hook
import { useParams } from 'react-router-dom';
// import { MoviesList } from './MoviesList';


const key = process.env.REACT_APP_TMDB_KEY;
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${key}`


export function MovieDetail() {

  const [ movie, setMovie ] = useState({});
  const [ config, setConfig ] = useState({});

  const { id } = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;

  const getMovie = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovie(data);
      console.log(movie);
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

  useEffect(() => {
    getConfig();
    getMovie();
  }, [id]);


  if (!movie.title) return null;

  return (
    <div>
      { config.images?.base_url && (
          <img className="backdrop" src={config.images.base_url + config.images.backdrop_sizes[3] + movie.backdrop_path} alt={movie.title + " Backdrop"} />
      )}

      <div className="detail-details">
        { config.images?.base_url && (
          <img className="detail-poster" src={config.images.base_url + config.images.poster_sizes[3] + movie.poster_path} alt={movie.title + " Poster"} />
          )}

        <div>
          <Link className="btn-back" to="/">Back</Link>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map((genre) => <li key={genre.id} >{genre.name}</li>)}
          </ul>
        </div>

      </div>

    </div>
  )
}
