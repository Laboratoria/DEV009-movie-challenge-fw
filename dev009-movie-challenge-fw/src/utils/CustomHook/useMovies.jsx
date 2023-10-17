import React, { useState, useEffect } from 'react';
import { getMovies } from '../Services/moviesRepository';

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState('all');
  
    useEffect(() => {
      // Call getMovies when currentPage changes
      getMovies(currentPage,selectedGenre).then(moviesData => {
        setMovies(moviesData);
      });
    }, [currentPage,selectedGenre]);
  
    return {
      movies,
      currentPage,
      setCurrentPage,
      selectedGenre,
      setSelectedGenre,
      setMovies
    };
  };