import React, { useState, useEffect } from 'react';
import './MovieAdmin.css';
import { searchMovie } from '../../utils/Services/moviesRepository'; 
import Header from '../header/Header';
import ListMovies from '../ListMovies/ListMovies';
import OrderBy from '../OrderBy/OrderBy';
import MovieFilter from '../MoviesFilter/MoviesFilter';
import MovieDetail from '../MovieDetail/MovieDetail';
import Paginacion from '../Paginacion/Paginacion';
import { useMovies} from '../../utils/CustomHook/useMovies'
import { useSortedList } from '../../utils/CustomHook/useSortedList'

const MovieAdmin = () => {
  // Desestructuración de objetos
  const { movies, currentPage, setCurrentPage } = useMovies();
  // Estado
  const [list, setList] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('all');
  const [filteredYear, setFilteredYear] = useState('all');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filteredGenre, setFilteredGenre] = useState('all');
  const itemsPerPage = 20; 
  const [totalPages, setTotalPages] = useState(1);
  const sortedList = useSortedList(list, selectedSortOption);
  const [searchTerm, setSearchTerm] = useState('');


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
  const handleSearch = (searchText) => {
    // Realiza la búsqueda y pasa el texto de búsqueda
    searchMovie(searchText)
      .then((results) => {
        // Actualiza el estado local con los resultados de la búsqueda
        setList(results); // Asume que results es la lista de películas de la búsqueda
      })
      .catch((error) => {
        console.error('Error en la búsqueda:', error);
        // Maneja el error, si es necesario
      });
  };
  
  useEffect(() => {
    if (movies) {
      // Assuming movies is an array of movie objects
      setList(movies);
    }
  }, [movies]);

  return (
    <div>
        <Header onSearch={() => searchMovie(searchTerm)} onSearchTermChange={handleSearch} />

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
            src={require('../../assets/img/logo.png')}
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