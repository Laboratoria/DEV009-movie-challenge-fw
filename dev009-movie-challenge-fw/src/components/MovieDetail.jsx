import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = ({ movieList }) => {
  const { movieId } = useParams(); // Obtengo el ID de la película de la URL

  // Busca los detalles de la película correspondiente en la lista de películas
  const selectedMovie = movieList.find(movie => movie.id === parseInt(movieId));

  if (!selectedMovie) {
    return <div>No se encontró la película.</div>;
  }

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w400${selectedMovie.poster_path}`}
        alt={selectedMovie.title}
        className="movie-poster"
      />
      <h2 className="movie-title">{selectedMovie.title}</h2>
      <p className="overview">{selectedMovie.overview}</p>
      <p className="movie-score">{'Score:' + selectedMovie.vote_average}</p>
    </div>
  );
};

export default MovieDetail;
