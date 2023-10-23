# Changelog

## 1.1.1 - 2023-10-18

### Sprint learnings

- Aprendi a usar angular material 
- Aprendi a usar el lazyload para rutas hijas
- Aprendi de test usando jasmin
- Aprendi a dar estilos en sass extencion (scss)

### Added

- Instale y configure angualar material usarlo en mis componentes
- Usando  la libreria sidenav de  angular material cree un lazyload para rutas children y asi poder cargar los componentes de manera peresosa.
- Cree mi primer test usando jasmin y creando mocks
- Le di estilos a mi component movie-list con sass para crear cards con angular material.

### Fixed

- Se resuleve la manera en que queria mostrar los componentes en el sidenav con la carga peresosa.
- Implemente un sistema de rutas en movie.routing children
- En los test se implemento el uso de jasmine.createSpyObj para poder simular el request y el serve asi poder mockear





## 1.1.0 - 2023-10-11

### Sprint learnings

- Aprendi a crear una interface para alamcenar los tipos de datos en typescrit y asi poderlos usar en un observable
- Aprendi a comunicar componentes usando  BehaviorSubjec.
- logre ordenar la data con el params sort_by 
- logre hacer el enpoint de detail/movie{movie_id} y mostrar la sinopsis de las movies.

### Added

- Cree una carpeta interface donde almacena los archivos de la data que se va utilizar para el tipado de datos.
- Comunique mi component movie-list con search para buscar las movies por el nombre
- Agregue a mi router la busqueda por id de las peliculas para que apuntara al enpoint de detail/movie{movie_id}. y poder mostrar lo details.
- Corregi errores de los test para poder correr npm run test.


## 1.0.1 - 2023-10-03

### Sprint learnings

- Aprendimos a instalar Angular 
- Investigue sobre el manejo de la logica del Framework
- Investigue como se usa HTTPClient y un observable
- Investigue como se crea un component y service
- Ejecutamos el API Mock de ThemovieDB e hice una peticiones de prueba usando Postman para traer la data discover/movie.

### Added
- Cree el routing de la navegacion y lo integre en un nav usando bootstrap
- Creer la interfaz de las movies sin estilos pero logre completar el hito 1 con la data de discover/movie y la paginación en el componente movie-list.
- Complete el Hito 2 de las geners mostrados en un select aun sin usar estilos.

### Fixed

- Resolvi la paginación ya que no me generaba el cambio de paginas.

### Commit Log

* Cambios en la paginacion component movie-list
* Hito 2 
* Router e hito 1
* Cambios en el README

## 1.0.0 - 2023-09-26

### Sprint learnings

-Planificar mi organizacion en el proyecto 
- Leer los Hitos a desarrollar 
- Crear mi cuenta en THEMOVIEDB para la api_key

