import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MoviesAdmin from '../App';
import MovieDetail from '../components/MovieDetail';

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesAdmin />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default Routes;



