import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MovieServiceService } from 'src/app/service/service.service';
import { Movie, MovieResult } from 'src/app/Interface/discover';
import { ComunicationMovieService } from 'src/app/service-comunication/comunication-movie.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: Movie[] = [];

  private searchTerms = new Subject<string>();

  constructor(
    private moviesService: MovieServiceService,
    private movieComunicationsService: ComunicationMovieService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      texto: new FormControl('', [])
    });
  }

  ngOnInit(): void {
    this.searchForm.get('texto')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) =>
          this.moviesService.getSearchMovie(term)
        )
      )
      .subscribe((data: MovieResult) => {
        console.log(data);
        this.searchResults = data.results;
        this.movieComunicationsService.updateSearchResults(this.searchResults);
      });
  }

  onSearchMovie() {
    const texto = this.searchForm.get('texto')?.value;
    if (texto) {
      this.searchTerms.next(texto);
    }
  }
}
