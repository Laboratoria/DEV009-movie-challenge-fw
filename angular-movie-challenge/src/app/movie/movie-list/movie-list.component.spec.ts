import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [HttpClientModule, FormsModule, HttpClientModule], // Agrega HttpClientTestingModule
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });


    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate the correct number of pages', () => {
    // Set the total pages and page size
    component.totalPages = 10;
    component.pageSize = 3;

    const result = component.getMoviePagination();

    expect(result).toBe(4); // 10 total pages / 3 page size = 3.333, rounded up to 4.
  });

  it('should return 0 if there are no movies or pageSize is 0', () => {
    // Set the total pages to 10, but no movies and pageSize to 0.
    component.totalPages = 10;
    component.pageSize = 0;

    const result = component.getMoviePagination();

    expect(result).toBe(0);
  });
});
