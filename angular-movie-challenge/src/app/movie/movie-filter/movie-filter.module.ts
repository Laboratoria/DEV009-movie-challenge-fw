// models

export interface Genre {
    id: number;
    name: string;
  }

  export interface GenreResult {
    id: number;
    name: string;
  }
  export interface Movie {
    title: string;
    year: number;
    genre: string; 
    director: string;
    poster_url: string; 
  }
  