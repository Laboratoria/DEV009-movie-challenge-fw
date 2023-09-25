import React, { useState, useMemo } from 'react';
import './App.css';
import MoviesRepository from './utils/api/moviesRepository';
import ListMovies from './components/ListMovies';
import OrderBy from './components/OrderBy';

const MoviesAdmin = () => {
  const [list, setList] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('title-asc'); 

  const sortedList = useMemo(() => {
    const [sortField, sortOrder] = selectedSortOption.split('-');
    
    // Se clona la lista actual para no modificar el estado directamente
    const nextList = [...list];

    // Aplica la lógica de ordenación
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

  const handleMoviesFetched = (movies) => {
    setList(movies);
  };


  function handleSortOptionChange(event) {
    setSelectedSortOption(event.target.value);
  }
  return (
    <div>
      <header>
        <nav>
        </nav>
      </header>

      <div className="presentation">
        <div className="intro-text">
          <h1>WANDERLUST<br />MOVIES TRAVELER COMMUNITY</h1>
          <div>
            <p>¿Eres un apasionado de las películas y también un espíritu libre que vive viajando por el mundo?. No importa dónde te encuentres, puedes disfrutar de tus películas favoritas, mientras exploras nuevos destinos aquí.

Únete a nuestra comunidad de viajeros cinéfilos y descubre una experiencia única de entretenimiento. </p>
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
            <div className="director-filter">
            <h3>FILTER</h3>
              <h4>Director</h4>
              <select title="dropdown filtro por director" className="director-filter-options" >
                <option value="all">All</option>
                <option value="Steven Spielberg">Steven Spielberg</option>
                <option value="Michael Bay">Michael Bay</option>
                <option value="Peter Jackson">Peter Jackson</option>
                <option value="Robert Zemeckis">Robert Zemeckis</option>
              </select>
                </div>
                <div className="year-filter">
            <h4>Year</h4>
            <select title="dropdown filtro por año" className="yearFilterSelect">
                <option value="all">All</option>
                <option value="1992">1992</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1997">1997</option>
                <option value="1999">1999</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2004">2004</option>
                <option value="2006">2006</option>
                <option value="2008">2008</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
            </select>
        </div>    
        <OrderBy
            selectedSortOption={selectedSortOption}
            handleSortOptionChange={handleSortOptionChange}
          />
        </div>
        </div>
        <div className="movies">
          <MoviesRepository moviesFetched={handleMoviesFetched} /> 
          {/* Lista de películas  */}
          <ListMovies sortedList={sortedList} />
          </div>
      </main>
    </div>
  );
};

export default MoviesAdmin;
