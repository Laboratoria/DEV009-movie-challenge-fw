import { useEffect, useState } from 'react';

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
          
          // Extract movie IDs into an array
          const ids = movies.map(movie => movie.id);
          setMovieIds(ids);
          console.log(movieIds); // Check the value of movieIds

          moviesFetched(movies, ids); // Pass both movies and movieIds to the function provided by App.jsx
        } else {
          console.error('La respuesta de la API está vacía o no es válida.');
        }
      })
      .catch(err => {
        console.error(err.message);
      });
  },  [moviesFetched, movieIds]);

  return null; // No es necesario representar nada en este componente
};

export const getOne = (movieId) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ce209e5ff09d9bb827b2cd4025cd595c`)
    .then(response => response.json())
    .then(responseData => {
      if (responseData) {
        return responseData; // Devuelve directamente los datos de la película
      } else {
        console.error('La respuesta de la API está vacía o no es válida.');
        return null; // Puedes devolver null u otro valor apropiado en caso de error
      }
    });
};

export const getGenre = (movieId) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTIwOWU1ZmYwOWQ5YmI4MjdiMmNkNDAyNWNkNTk1YyIsInN1YiI6IjY1MGE2MGE0ZDZjMzAwMDBjY2UwZjZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlDc2oGZoiPKCJY1QUu-CCVAnCHRNQ5AkwBMPwnwiBY'
    }
  };
  return fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => console.error(err));
};

export default MoviesRepository;
