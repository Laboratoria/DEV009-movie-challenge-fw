const apiKey = 'ce209e5ff09d9bb827b2cd4025cd595c';
const apiUrl = 'https://api.themoviedb.org/3';

export const getMovies = (page) => {
  

  return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&page=${page}`)
    .then(response => response.json())
    .then(responseData => {
      if (responseData && responseData.results) {
        return responseData.results;
      } else {
        console.error('La respuesta de la API está vacía o no es válida.');
        return [];
      }
    })
    .catch(err => {
      console.error(err.message);
      return [];
    });
};


export const getOne = (movieId) => {
  return fetch(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`)
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

export const searchMovie = (searchText) => {
  const encodedQuery = encodeURIComponent(searchText);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTIwOWU1ZmYwOWQ5YmI4MjdiMmNkNDAyNWNkNTk1YyIsInN1YiI6IjY1MGE2MGE0ZDZjMzAwMDBjY2UwZjZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlDc2oGZoiPKCJY1QUu-CCVAnCHRNQ5AkwBMPwnwiBY',
    },
  };

  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ce209e5ff09d9bb827b2cd4025cd595c&query=${encodedQuery}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
};