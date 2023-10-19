import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieAdmin from '../components/MovieAdmin/MovieAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieAdmin />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
