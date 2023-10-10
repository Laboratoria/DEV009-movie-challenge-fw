import { useEffect, useState } from 'react';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ce209e5ff09d9bb827b2cd4025cd595c&page=${currentPage}`)
      .then(response => response.json())
      .then(responseData => {
        if (responseData && responseData.results) {
          const moviesData = responseData.results;
          setMovies(moviesData);
        } else {
          console.error('La respuesta de la API está vacía o no es válida.');
        }
      })
      .catch(err => {
        console.error(err.message);
      });
  }, [currentPage]);

  return {
    movies, currentPage, setCurrentPage
  };
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

export const searchMovie = () => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTIwOWU1ZmYwOWQ5YmI4MjdiMmNkNDAyNWNkNTk1YyIsInN1YiI6IjY1MGE2MGE0ZDZjMzAwMDBjY2EwZjZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlDc2oGZoiPKCJY1QUu-CCVAnCHRNQ5AkwBMPwnwiBY',
      },
    };

    fetch('https://api.themoviedb.org/3/keyword/movie?api_key=ce209e5ff09d9bb827b2cd4025cd595c', options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
};