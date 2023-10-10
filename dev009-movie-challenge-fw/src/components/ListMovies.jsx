import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';


const ListMovies = ({ movies, sortedList, filteredYear, filteredGenre }) => {
  const filteredAndSortedMovies = useMemo(() => {
  console.log(sortedList)

    let filteredMovies = sortedList; // Use the sortedList prop for sorting

    if (filteredYear !== 'all') {
      // Filter based on the original 'movies' prop
      filteredMovies = movies.filter((movie) => {
        return movie.release_date.split('-')[0] === filteredYear;
      });
    }

    // Filtrar por género
    if (filteredGenre !== 'all') {
      // Filter based on the original 'movies' prop
      filteredMovies = filteredMovies.filter((movie) => {
        // Check if movie is defined and has 'genre_ids' property
        if (movie && movie.genre_ids) {
          return movie.genre_ids.includes(parseInt(filteredGenre));
        }
        return false; // Return false if 'movie' is undefined or has no 'genre_ids'
      });
    }

    return filteredMovies;
  }, [movies, sortedList, filteredYear, filteredGenre]);

  return (
    <div className="movies-grid">
      {filteredAndSortedMovies.map((movie) => (
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