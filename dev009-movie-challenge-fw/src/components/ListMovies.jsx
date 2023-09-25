import React from 'react';

const ListMovies = ({ sortedList }) => {
  return (
    <div className="movies-grid">
      {sortedList.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <p className="movie-title">{movie.title}</p>
          <p className="movie-score">{movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default ListMovies;
