import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <input
              type="text"
              placeholder="Buscar películas"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearchSubmit} type="button">
              Search
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
