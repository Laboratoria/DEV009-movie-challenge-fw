import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../Interface/discover';

@Injectable({
  providedIn: 'root'
})
export class ComunicationMovieService {

  private searchResultsSource = new BehaviorSubject<Movie[]>([]);
  searchResults$ = this.searchResultsSource.asObservable();

  updateSearchResults(results:Movie[]){
    this.searchResultsSource.next(results);
  }


}
