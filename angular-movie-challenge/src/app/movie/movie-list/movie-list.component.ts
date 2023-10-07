import { Component, OnInit } from '@angular/core';
import { MovieResult, Movie} from 'src/app/Interface/discover';

import { MovieServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies: Movie[] = []; //
  public currentPage: number = 1;
  public totalPages: number = 0;
  pageSize: number = 1;

      // Define la propiedad 'pages' en el componente
      pages: number[] = [];
  
  constructor(private moviesService: MovieServiceService) { }

  ngOnInit(): void {
    this.getDiscoveryMovie(this.currentPage);
  }

  // CATALOGO DISCOVER - MOVIES

  private getDiscoveryMovie(page: number) {

    this.moviesService.getDiscoveryMovie(page).subscribe((data:MovieResult)=>{
      console.log(data);
      this.movies = data.results;
      this.currentPage = data.page;
      this.totalPages = data.total_results;

    });
  }

  // PAGINACION

  getMoviePagination(){
    return this.movies/* .slice(indexStart, indexEnd) */;
  }

  nextPage(){
    this.setPage(this.currentPage + 1 );
  }

  prevPage() {
    this.setPage(this.currentPage -1 );
  }
  
  private setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getDiscoveryMovie(this.currentPage);
    }
  }

  get totalMoviePages(): number {
   if (this.movies.length === 0 || this.pageSize === 0) {
    return 0;
  }
  return Math.ceil(this.movies.length / this.pageSize);
}


  
}


