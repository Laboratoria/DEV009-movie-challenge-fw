import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import ListMovies from '../components/ListMovies';
import MovieDetail from '../components/MovieDetail';
import MoviesRepository from '../utils/api/moviesRepository'; // Import the data fetching component
import MovieAdmin from '../App/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieAdmin />} />
        <Route path="/movies" element={<ListMovies />} />
        <Route
          path="/movie/:movieId"element={<MovieDetail  />}
        />
      </Routes>
    </Router>
  );
}

export default App;
