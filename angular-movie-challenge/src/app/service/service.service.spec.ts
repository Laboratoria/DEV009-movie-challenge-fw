import { TestBed } from '@angular/core/testing';
import { MovieServiceService } from './service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ServiceService', () => {
  let service: MovieServiceService ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MovieServiceService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
