import React, { useEffect, useState } from 'react';

const MoviesRepository = ({ moviesFetched }) => {
  const [list, setList] = useState([]);
  const [movieIds, setMovieIds] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ce209e5ff09d9bb827b2cd4025cd595c')
      .then(response => response.json())
      .then(responseData => {
        if (responseData && responseData.results) {
          const movies = responseData.results;
          setList(movies);
          moviesFetched(movies); // Call the function provided by App.jsx
          
          // Extract movie IDs into an array
          const ids = movies.map(movie => movie.id);
          setMovieIds(ids);
        } else {
          console.error('La respuesta de la API está vacía o no es válida.');
        }
      })
      .catch(err => {
        console.error(err.message);
      });
  }, [moviesFetched]);

  return null; // No es necesario representar nada en este componente
};

export default MoviesRepository;
