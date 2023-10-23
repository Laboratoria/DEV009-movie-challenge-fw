import React, { useState} from 'react';
import './MovieAdmin.css' ;
import { searchMovie } from '../../utils/Services/moviesRepository'; 
import Header from '../header/Header';
import ListMovies from '../ListMovies/ListMovies';
import OrderBy from '../OrderBy/OrderBy';
import MovieFilter from '../MoviesFilter/MoviesFilter';
import Paginacion from '../Paginacion/Paginacion';
import { useMovies} from '../../utils/CustomHook/useMovies';
import logo from '../../assets/img/logo.png';


const MovieAdmin = () => {
 
  const { movies, setMovies, currentPage, setCurrentPage, selectedGenre, setSelectedGenre,selectedSortOption,setSelectedSortOption } = useMovies();
  const [totalPages, setTotalPages] = useState(1);
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

    const handleSortOptionChange = (e) => {
      const newSortOption = e.target.value;
      setSelectedSortOption(newSortOption);
 
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
      <div className="content">
        <main>
            <div className="side">
              <div className="filters">
              <MovieFilter selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
              <OrderBy selectedSortOption={selectedSortOption} handleSortOptionChange={handleSortOptionChange} />
              </div>
            </div>
          <div className="movies">
            <Paginacion
                currentPage={currentPage}
                totalPages={movies.total_pages}
                onPageChange={(newPage) => setCurrentPage(newPage)}
              />
              
              <ListMovies movies={searchResults.length ? searchResults : movies} />


              <Paginacion
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(newPage) => setCurrentPage(newPage)}
            />
          
          </div>
        </main>
      </div>
  </div>
  );
};

export default MovieAdmin;