import { Component, Input, OnInit } from '@angular/core';
import { MovieResult, Movie } from 'src/app/Interface/discover';
import { PageEvent } from '@angular/material/paginator';
import { MovieServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[] = [];

  currentPage: number = 1;
  totalPages: number = 0;
  pageSize: number = 5;
  pages: number[] = [];


  selectSortOption: string = 'popularity.asc';


  constructor(private moviesService: MovieServiceService) { }

  ngOnInit(): void {
    this.getDiscoveryMovie(this.currentPage);
  }

  // CATALOGO DISCOVER - MOVIES

  private getDiscoveryMovie(page: number) {

    this.moviesService.getDiscoveryMovie(page).subscribe((data: MovieResult) => {
      console.log(data);
      this.movies = data.results;
      this.currentPage = data.page;
      this.totalPages = data.total_results;



    });
  }

  // PAGINACION

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getDiscoveryMovie(this.currentPage);
  }
  getMoviePagination():number { 
   /* return this.movies/* .slice(indexStart, indexEnd) */
    if(this.movies.length === 0 || this.pageSize === 0) {
      return 0;
  }
  return Math.ceil(this.totalPages/this.pageSize);
}

  /*nextPage() {
    this.setPage(this.currentPage + 1);
  }

  prevPage() {
    this.setPage(this.currentPage - 1);
  }*/

  /*private setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getDiscoveryMovie(this.currentPage);
    }
  }*/

  /*get totalMoviePages(): number {
    if (this.movies.length === 0 || this.pageSize === 0) {
      return 0;
    }
    return Math.ceil(this.movies.length / this.pageSize);
  }*/

  // SORT THE MOVIES

  onSortMovie(){
    this.loadMovie(this.selectSortOption);
  }

  loadMovie(sort_movies:string){
    this.moviesService.getMovieSort(sort_movies).subscribe((data:MovieResult) => {
      console.log(data);
      this.movies = data.results;
    });
  }

  // GENRES MOVIES CARDS



}


