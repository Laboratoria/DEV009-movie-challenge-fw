import React, { useState, useEffect } from 'react';
import { getGenre } from '../utils/api/moviesRepository';

const MovieFilter = ({ movies, onYearFilterChange, onGenreFilterChange, filteredYear, filteredGenre }) => {
  const [selectedYear, setSelectedYear] = useState(filteredYear);
  const [selectedGenre, setSelectedGenre] = useState(filteredGenre);
  const [genres, setGenres] = useState([]);

  // Extract the years from the movies and remove duplicates
  const years = [...new Set(movies.map(movie => movie.release_date.split('-')[0]))];

  useEffect(() => {
    onYearFilterChange(selectedYear);
  }, [selectedYear, onYearFilterChange]);

  useEffect(() => {
    onGenreFilterChange(selectedGenre);
  }, [selectedGenre, onGenreFilterChange]);

  useEffect(() => {
    // Call the getGenre function to get the list of genres
    getGenre()
      .then((genreData) => {
        setGenres(genreData.genres);
      })
      .catch((error) => {
        console.error('Error getting genres:', error);
      });
  }, []);
  
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div className="filter-container">
      <div className="year-filter">
        <h3>FILTER BY YEAR</h3>
        <select
          title="Dropdown filtro por año"
          className="year-filter-options"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="all">All</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="genre-filter">
        <h3>FILTER BY GENRE</h3>
        <select
          title="Dropdown filtro por género"
          className="genre-filter-options"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="all">All</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MovieFilter;
