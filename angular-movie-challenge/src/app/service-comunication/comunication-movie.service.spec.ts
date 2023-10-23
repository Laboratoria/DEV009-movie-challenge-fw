import { TestBed } from '@angular/core/testing';

import { ComunicationMovieService } from './comunication-movie.service';

describe('ComunicationMovieService', () => {
  let service: ComunicationMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicationMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
