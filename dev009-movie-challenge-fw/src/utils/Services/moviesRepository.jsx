export const getMovies = (page) => {
  const apiKey = 'ce209e5ff09d9bb827b2cd4025cd595c';

  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`)
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