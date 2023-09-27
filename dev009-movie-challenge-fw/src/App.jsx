import React, { useState, useMemo } from 'react';
import './App.css';
import MoviesRepository from './utils/api/moviesRepository';
import ListMovies from './components/ListMovies';
import OrderBy from './components/OrderBy';
import MovieFilter from './components/MoviesFilter';
import MovieDetail from './components/MovieDetail';

const MoviesAdmin = () => {
  const [list, setList] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('title-asc');
  const [filteredYear, setFilteredYear] = useState('all');

  const handleYearFilterChange = (year) => {
    setFilteredYear(year);
  };

  const handleMoviesFetched = (movies) => {
    setList(movies);
  };

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

 // const handleMovieClick = (movieId) => {
  //  setSelectedMovieId(movieId);
  //};

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
      <header>
        <nav>
          <ul>
            <li><a href="#side">Home</a></li>
            <li><a href="#side">Movies</a></li>
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </ul>
        </nav>
      </header>

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
            <MovieFilter movies={list} onYearFilterChange={handleYearFilterChange} filteredYear={filteredYear} />
            <OrderBy selectedSortOption={selectedSortOption} handleSortOptionChange={handleSortOptionChange} />
          </div>
        </div>

        <div className="movies">
          <MoviesRepository moviesFetched={handleMoviesFetched} /> 
          {/* Lista de películas  */}
          <ListMovies filteredYear={filteredYear} sortedList={sortedList} />
        </div>
        
      </main>
    </div>
  );
};

export default MoviesAdmin;
