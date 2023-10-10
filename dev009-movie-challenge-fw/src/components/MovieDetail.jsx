// MovieDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../utils/api/moviesRepository';
import { Link } from 'react-router-dom';

const MovieDetail = ({genres}) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const { movieId } = useParams(); // Obtiene el movieId de los parámetros de la URL

  useEffect(() => {
    // Llamo  a la función getOne con el movieId que obtuve
    getOne(movieId)
      .then((movieData) => {
        setSelectedMovie(movieData);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles de la película:', error);
      });
  }, [movieId]);


  return (
    <main>
      <div className="movie-card-detail">
      <div className="movie-detail">

      <Link to="/">
        <button className="custom-button">Back to movie list</button>
      </Link>

        <div className="container mt-5">
          <h1 className="movie-title">{selectedMovie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className="movie-poster-detail"
        />
        </div>
      </div>
      
        <div className="MovieCaptions">
          <p className="release-year">
            Release Year: {selectedMovie.release_date ? selectedMovie.release_date.split('-')[0] : 'N/A'}
          </p>

          <h4>Overview:</h4>
          <p className="movie-overview">{selectedMovie.overview}</p>
          <p className="movie-score">{'Score:' + selectedMovie.vote_average}</p>

          <div className="movie-genres">
            <h4>Genres:</h4>
            <ul>
              {selectedMovie.genres && selectedMovie.genres.map((genre) => (
                <li key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="production-companies">
            {selectedMovie.production_companies ? (
              selectedMovie.production_companies.map((company) => (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt={company.name}
                  className="production-company-logo"
                />
              ))
            ) : (
              <p>No production companies available</p>
            )}
          </div>
        </div>

        </div>
  </main>
);
};

export default MovieDetail;
