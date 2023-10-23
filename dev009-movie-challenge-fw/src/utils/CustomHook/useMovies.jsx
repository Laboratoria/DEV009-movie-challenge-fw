import { useState, useEffect } from 'react';
import { getMovies } from '../Services/moviesRepository';

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [selectedSortOption,setSelectedSortOption]=useState('all');
  
    useEffect(() => {
      getMovies(currentPage,selectedGenre,selectedSortOption).then(moviesData => {
        console.log(moviesData);
        setMovies(moviesData);
      });
    }, [currentPage,selectedGenre,selectedSortOption]);
  
    return {
      movies,
      setMovies,
      currentPage,
      setCurrentPage,
      selectedGenre,
      setSelectedGenre,
      selectedSortOption,
      setSelectedSortOption
    };
  };
