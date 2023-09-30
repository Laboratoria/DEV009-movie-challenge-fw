import React, { useState, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router ,Route,Routes, Link } from 'react-router-dom';
import MoviesRepository from './utils/api/moviesRepository';
import Header from './components/Header';
import ListMovies from './components/ListMovies';
import OrderBy from './components/OrderBy';
import MovieFilter from './components/MoviesFilter';
import MovieDetail from './components/MovieDetail';

const MovieAdmin = () => {
  const [list, setList] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('title-asc');
  const [filteredYear, setFilteredYear] = useState('all');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filteredGenre, setFilteredGenre] = useState('all'); 
  
  const handleYearFilterChange = (year) => {
    setFilteredYear(year);
  };
  const handleGenreFilterChange = (genre) => {
    setFilteredGenre(genre);
  };

  const handleMoviesFetched = (movies) => {
    setList(movies);
  };

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

 const handleMovieClick = (movieId) => {
    setSelectedMovie(movieId);
  };

  const sortedList = useMemo(() => {
    const [sortField, sortOrder] = selectedSortOption.split('-');
    
    // Clone the list to avoid modifying the state directly
    const nextList = [...list];

    // Apply the sorting logic
    nextList.sort((a, b) => {
      if (sortField === 'title') {
        return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      } else if (sortField === 'vote_average') {
        return sortOrder === 'asc' ? a.vote_average - b.vote_average : b.vote_average - a.vote_average;
      }
      return 0;
    });

    return nextList;
  }, [list, selectedSortOption]);

  return (
    <div>
        <Header />

        <div className="presentation">
        <div className="intro-text">
          <h1>WANDERLUST<br />MOVIES TRAVELER COMMUNITY</h1>
          <div>
            <p>¿Eres un apasionado de las películas y también un espíritu libre que vive viajando por el mundo?. No importa dónde te encuentres, puedes disfrutar de tus películas favoritas, mientras exploras nuevos destinos aquí.</p>
            <p>¡Descarga la aplicación y comienza a explorar hoy mismo!"</p>
          </div>
        </div>
        <div>
          <img
            src={require('./assets/img/logo.png')}
            alt="Logo de mi sitio web"
            className="logo"
          />
        </div>
      </div>

        <main>
          <div className="side">
            <div className="filters">
            <MovieFilter
              movies={list}
              onYearFilterChange={handleYearFilterChange}
              onGenreFilterChange={handleGenreFilterChange} // Make sure this is passed correctly
              filteredYear={filteredYear}
              filteredGenre={filteredGenre}
            />

              <OrderBy selectedSortOption={selectedSortOption} handleSortOptionChange={handleSortOptionChange} />
            </div>
          </div>

          <div className="movies">
            <MoviesRepository moviesFetched={handleMoviesFetched} /> 
            <ListMovies
              filteredYear={filteredYear}
              filteredGenre={filteredGenre} // Pass the filtered genre
              sortedList={sortedList}
              onMovieClick={handleMovieClick}
            />

        </div>
        </main>
    </div>
  );
};

export default MovieAdmin;
