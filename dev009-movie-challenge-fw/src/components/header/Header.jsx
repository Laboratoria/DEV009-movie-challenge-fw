import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovie } from '../../utils/api/moviesRepository'; 
import './Header.css'

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Llama a la función de búsqueda con el término ingresado
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Buscar películas"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button type="submit">

              </button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

