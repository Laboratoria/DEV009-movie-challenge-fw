import React, { useMemo } from 'react';

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
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <p className="movie-title">{movie.title}</p>
          <p className="movie-score">{'Score:' + movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default ListMovies;
