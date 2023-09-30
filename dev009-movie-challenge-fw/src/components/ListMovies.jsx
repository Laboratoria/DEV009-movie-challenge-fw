import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const ListMovies = ({ sortedList, filteredYear }) => {
  const filteredAndSortedMovies = useMemo(() => {
    let filteredMovies = sortedList;

    if (filteredYear !== 'all') {
      filteredMovies = sortedList.filter(movie => {
        return movie.release_date.split('-')[0] === filteredYear;
      });
    }

    return filteredMovies;
    
  }, [sortedList, filteredYear]);

  return (
    <div className="movies-grid">
      {filteredAndSortedMovies.map((movie) => (
        <Link to = {'/movie/'+movie.id}>
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
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