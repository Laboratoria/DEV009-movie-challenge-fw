import { useState, useEffect } from "react";
import { getMovieSorted } from "../Services/moviesRepository";

export const useMovieSorted = (page, selectedSortOption) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Call getMovieSorted when page or sortMovies change
    getMovieSorted(page, selectedSortOption)
      .then((moviesData) => {
        setMovies(moviesData);
      })
      .catch((err) => console.error(err));
  }, [page, selectedSortOption]);

  return movies;
};

