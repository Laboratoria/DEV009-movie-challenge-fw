const apiKey = 'ce209e5ff09d9bb827b2cd4025cd595c';
const apiUrl = 'https://api.themoviedb.org/3';

export const getMovies = (page, genreId, selectedSortOption = 'all') => {
  // Verifica si se debe utilizar la URL por defecto
  if (selectedSortOption === 'all') {
    // Utiliza la URL sin ordenamiento
    return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&page=${page}&with_genres=${genreId}`)
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
  } else {
    // Utiliza la URL con el ordenamiento especificado
    return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&page=${page}&with_genres=${genreId}&sort_by=${selectedSortOption}`)
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
  }
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

export const getMovieSorted = (page, selectedSortOption) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTIwOWU1ZmYwOWQ5YmI4MjdiMmNkNDAyNWNkNTk1YyIsInN1YiI6IjY1MGE2MGE0ZDZjMzAwMDBjY2UwZjZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlDc2oGZoiPKCJY1QUu-CCVAnCHRNQ5AkwBMPwnwiBY'
    }
  };

  // Agrega el parámetro sort_by con el valor de sortMovies
  const apiUrlWithSort = `${apiUrl}/discover/movie/?page=${page}&sort_by=${selectedSortOption}`;

  return fetch(apiUrlWithSort, options)
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
};

export const getGenre = (movieId) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTIwOWU1ZmYwOWQ5YmI4MjdiMmNkNDAyNWNkNTk1YyIsInN1YiI6IjY1MGE2MGE0ZDZjMzAwMDBjY2UwZjZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlDc2oGZoiPKCJY1QUu-CCVAnCHRNQ5AkwBMPwnwiBY'
    }
  };
  return fetch(`${apiUrl}/genre/movie/list?language=en`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => console.error(err));
};



export const searchMovie = (query) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTIwOWU1ZmYwOWQ5YmI4MjdiMmNkNDAyNWNkNTk1YyIsInN1YiI6IjY1MGE2MGE0ZDZjMzAwMDBjY2UwZjZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlDc2oGZoiPKCJY1QUu-CCVAnCHRNQ5AkwBMPwnwiBY',
    },
  };

  return fetch(`${apiUrl}/search/movie?&query=${query}`, options)
  .then(response => response.json())
  .then(response => {
    // Verifica si hay resultados y establece total_pages en 0 si no los hay
    if (response.results.length === 0) {
      return { page: 1, results: [], total_pages: 0, total_results: 0 };
    }
    return response;
  })
  .catch(err => console.error(err));
};