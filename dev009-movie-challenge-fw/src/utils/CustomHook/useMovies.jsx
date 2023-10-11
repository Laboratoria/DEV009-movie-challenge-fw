import React, { useState, useEffect } from 'react';
import { getMovies } from '../Services/moviesRepository';

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      // Call getMovies when currentPage changes
      getMovies(currentPage).then(moviesData => {
        setMovies(moviesData);
      });
    }, [currentPage]);
  
    return {
      movies,
      currentPage,
      setCurrentPage,
    };
  };