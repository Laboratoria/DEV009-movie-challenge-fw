import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResult } from '../Interface/discover';
import { GenreResult } from '../Interface/genres';
import { DetailsResult } from '../Interface/details';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '16dfeb0f3e4049b632b795ff3d997f25';

  //tipado usando interface remplazando any

  getDiscoveryMovie(page: number): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&page=${page}`);

  }

  // GENERS MOVIES

  getGenersMovies(): Observable<GenreResult> {
    return this.http.get<GenreResult>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`);
  }

  // CATEGORY MOVIES FROM GENERS

  getGenerCategory(genreId?: number, page?: number, sortGenres?:string): Observable<MovieResult> {
    //return this.http.get(`${this.apiKey}?api_key=${this.apiKey}&with_genres=28`);
    return this.http.get<MovieResult>(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}&sort_by=${sortGenres}&page=${page}`);
  }

  // SORT THE MOVIES

  getMovieSort(sortMovies: string): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&sort_by=${sortMovies}`);
  }

   // SERCH THE MOVIES

   getSearchMovie(texto: string):Observable<MovieResult>{
    const encodedQuery = encodeURIComponent(texto);
    return this.http.get<MovieResult>(`${this.apiUrl}//search/movie?api_key=${this.apiKey}&query=${encodedQuery}`);
   }

   // DETAILS MOVIES 

   getMovieDetails(movieId:number):Observable<DetailsResult>{
    return this.http.get<DetailsResult>(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`);

   }
}
