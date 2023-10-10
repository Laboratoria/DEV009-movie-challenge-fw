import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import { MoviesList, searchMovie } from '../utils/api/moviesRepository'; 
import Header from '../components/header/Header';
import ListMovies from '../components/ListMovies/ListMovies';
import OrderBy from '../components/OrderBy/OrderBy';
import MovieFilter from '../components/MoviesFilter/MoviesFilter';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import Paginacion from '../components/Paginacion';

const MovieAdmin = () => {
  // Desestructuración de objetos
  const { movies, currentPage, setCurrentPage } = MoviesList();
  // Estado
  const [list, setList] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('all');
  const [filteredYear, setFilteredYear] = useState('all');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filteredGenre, setFilteredGenre] = useState('all');
  const itemsPerPage = 20; // Número de películas por página

  // Funciones de manejo de eventos
  const handleYearFilterChange = (year) => {
    setFilteredYear(year);
  };

  const handleGenreFilterChange = (genre) => {
    setFilteredGenre(genre);
  };

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const handleMovieClick = (movieId) => {
    setSelectedMovie(movieId);
  };
  const [sortedList, setSortedList] = useState([]);
  useEffect(() => {
    if (movies) {
      // Assuming movies is an array of movie objects
      setList(movies);
    }
  }, [movies]);

  // useEffect to update the sortedList whenever movies or selectedSortOption changes
  useEffect(() => {
    if (movies) {
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

      setSortedList(nextList);
    }
  }, [movies, list, selectedSortOption]);


  return (
    <div>
        <Header onSearch={searchMovie} />

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
            src={require('../assets/img/logo.png')}
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

              <OrderBy 
                selectedSortOption={selectedSortOption} 
                handleSortOptionChange={handleSortOptionChange} 
                />
              </div>
            </div>
          <div className="movies">
            <Paginacion
                currentPage={currentPage}
                totalPages={movies.total_pages}
                onPageChange={(newPage) => setCurrentPage(newPage)}
              />
              
              <ListMovies
                movies={movies} 
                filteredYear={filteredYear}
                filteredGenre={filteredGenre}
                sortedList={sortedList}
                onMovieClick={handleMovieClick}
              />

              <Paginacion
                currentPage={currentPage}
                totalPages={movies.total_pages}
                onPageChange={(newPage) => setCurrentPage(newPage)}
            />

          </div>
        </main>
    </div>
  );
};

export default MovieAdmin;