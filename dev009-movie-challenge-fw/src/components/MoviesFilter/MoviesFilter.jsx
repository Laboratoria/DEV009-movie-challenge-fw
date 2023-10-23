import React, { useState, useEffect } from 'react';
import { getGenre } from '../../utils/Services/moviesRepository';

const MovieFilter = ({ selectedGenre, setSelectedGenre }) => {
  const [genres, setGenres] = useState([]);

  
  useEffect(() => {
    // Call the getGenre function to get the list of genres
    getGenre()
      .then((genreData) => {
        setGenres(genreData.genres); // Actualiza el estado con los géneros obtenidos
        setSelectedGenre(selectedGenre);
      })
      .catch((error) => {
        console.error('Error getting genres:', error);
      });
  }, []);

  const handleGenreChange = (e) => {
    const newSelectedGenre = e.target.value;
    setSelectedGenre(newSelectedGenre);
  };

  return (
    <div className="filter-container">
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