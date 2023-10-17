import React from 'react';
import { Link } from 'react-router-dom';
import './ListMovies.css'


const ListMovies = ({movies}) => {

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <div className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.poster}
              className="movie-poster"
            />
            <p className="movie-title">{movie.title}</p>
            <p className="release-year">
              Release Year: {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListMovies;