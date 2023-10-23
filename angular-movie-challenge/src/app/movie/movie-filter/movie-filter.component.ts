import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/service.service';

import { Movie, MovieResult } from 'src/app/Interface/discover';
import { Genre, GenreResult } from 'src/app/Interface/genres';


@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {

  genres: Genre[] = [];
  selectGenreId: number | undefined;
  movies: Movie[] = [];
  public currentPageGenre: number = 1;
  public totalPagesGenre: number = 0;
  pageSizeGenre: number = 1;
  pages: number[] = [];

  selectSortGenre:string = 'popularity.asc';

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    // Obtener la lista de géneros de películas
    this.movieService.getGenersMovies().subscribe((data: GenreResult) => {
      // Accede a la propiedad genres dentro de GenreResult
      console.log(data);
      this.genres = data.genres;

    });
  }

  onGenreSelect(): void {
    if (this.selectGenreId) {
      // Obtener las películas del género seleccionado
      this.movieService.getGenerCategory(this.selectGenreId, this.currentPageGenre).subscribe((data: MovieResult) => {
        console.log(data);
        this.movies = data.results;
        this.currentPageGenre = data.page;
        this.totalPagesGenre = data.total_results;

      });
    }
  }

  // PAGINACION

  getMoviePagination() {
    return this.movies/* .slice(indexStart, indexEnd) */;
  }

  nextPageGenre() {
    this.setPage(this.currentPageGenre + 1);
  }

  prevPageGenre() {
    this.setPage(this.currentPageGenre - 1);
  }

  private setPage(page: number) {
    if (page >= 1 && page <= this.totalPagesGenre) {
      this.currentPageGenre = page;
      this.onGenreSelect();
    }
  }

  get totalGenrePages(): number {
    if (this.movies.length === 0 || this.pageSizeGenre === 0) {
      return 0;
    }
    return Math.ceil(this.movies.length / this.pageSizeGenre);
  }

  // SORT THE MOVIES

  onSortMovieGenres():void{

    if (this.selectGenreId) {
      // Obtener las películas del género seleccionado con el orden especificado
      this.movieService
      this.movieService.getGenerCategory(this.selectGenreId,this.currentPageGenre,this.selectSortGenre).subscribe((data: MovieResult) => {
        console.log(data);
        this.movies = data.results;
        this.currentPageGenre = data.page;
        this.totalPagesGenre = data.total_results;
      });
    }


  }



}











