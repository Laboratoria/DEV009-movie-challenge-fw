import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import ListMovies from '../components/ListMovies/ListMovies';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MoviesRepository from '../utils/Services/moviesRepository'; // Import the data fetching component
import MovieAdmin from '../components/MovieAdmin/MovieAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieAdmin />} />
        <Route
          path="/movie/:movieId"element={<MovieDetail  />}
        />
      </Routes>
    </Router>
  );
}

export default App;
