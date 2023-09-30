// MovieDetail.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { getOne } from '../utils/api/moviesRepository';



const MovieDetail = ({genres}) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const { movieId } = useParams(); // Obtiene el movieId de los parámetros de la URL

  useEffect(() => {
    // Llama a la función getOne con el movieId
    getOne(movieId)
      .then((movieData) => {
        setSelectedMovie(movieData);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles de la película:', error);
      });
  }, [movieId]);

  return (
    <div>
    <div className="movie-detail">
      <button className="custom-button">Watch now</button>
    
    <div className="container mt-5">
      <h1 className="movie-title">{selectedMovie.title}</h1>
      <img
          src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
          className="movie-poster"
      />
      <p className="release-year">
        Release Year: {selectedMovie.release_date ? selectedMovie.release_date.split('-')[0] : 'N/A'}
      </p>

      <p className="movie-overview">{selectedMovie.overview}</p>
      <p className="movie-score">{'Score:' + selectedMovie.vote_average}</p>
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
      <div className="movie-genres">
        <h3>Genres:</h3>
        <ul>
          {selectedMovie.genre_ids?.map((genreId) => (
            
            <li key={genreId}>
              
              {genres.find((genre) => genre.id === genreId)?.name}
              
            </li>
          ))}
        </ul>
      </div>

      </div>
    </div>
    </div>
  );
};

export default MovieDetail;
