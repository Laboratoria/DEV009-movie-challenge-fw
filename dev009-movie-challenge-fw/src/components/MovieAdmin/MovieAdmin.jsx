import React, { useState,useEffect} from 'react';
import './MovieAdmin.css';
import { searchMovie, getMovieSorted } from '../../utils/Services/moviesRepository'; 
import Header from '../header/Header';
import ListMovies from '../ListMovies/ListMovies';
import OrderBy from '../OrderBy/OrderBy';
import MovieFilter from '../MoviesFilter/MoviesFilter';
import Paginacion from '../Paginacion/Paginacion';
import { useMovies} from '../../utils/CustomHook/useMovies';
import { useSortedList } from '../../utils/CustomHook/useSortedList';
import logo from '../../assets/img/logo.png';


const MovieAdmin = () => {
 
  const { movies, setMovies, currentPage, setCurrentPage, selectedGenre, setSelectedGenre } = useMovies();
  const [selectedSortOption, setSelectedSortOption] = useState('all');
  const itemsPerPage = 20; 
  const [totalPages, setTotalPages] = useState(1);
  const sortedList = useSortedList(movies, selectedSortOption);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm) => {
      // Llama a la función de búsqueda
      searchMovie(searchTerm)
        .then((response) => {
          // Actualiza el estado con los resultados
          setSearchResults(response.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }

 
  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  return (
    <div>
        <Header onSearch={handleSearch} />

        <div className="presentation">
        <div className="intro-text">
          <h1>WANDERLUST<br />MOVIES TRAVELER COMMUNITY</h1>
          <div>
            <p>Are you passionate about movies and also a free spirit who lives traveling the world? No matter where you are, you can enjoy your favorite movies, while exploring new destinations here.</p>
            <p>¡Download the app and start exploring today!"</p>
          </div>
        </div>
        <div>
          <img
            src={logo}
            alt="Logo de mi sitio web"
            className="logo"
          />
        </div>
      </div>

        <main>
            <div className="side">
              <div className="filters">
              <MovieFilter
                selectedGenre={selectedGenre} 
                setSelectedGenre={setSelectedGenre}
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
              
              <ListMovies movies={searchResults.length ? searchResults : sortedList} />


              <Paginacion
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(newPage) => setCurrentPage(newPage)}
            />
          
          </div>
        </main>
    </div>
  );
};

export default MovieAdmin;