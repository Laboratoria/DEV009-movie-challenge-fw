import { useEffect, useState } from 'react';

const MoviesRepository = ({ moviesFetched }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ce209e5ff09d9bb827b2cd4025cd595c')
      .then(response => response.json())
      .then(responseData => {
        if (responseData && responseData.results) {
          setList(responseData.results);
          moviesFetched(responseData.results); // Llama a la función proporcionada por App.jsx
          console.log(list)
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



