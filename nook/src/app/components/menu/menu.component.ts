import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { CategoryMovie } from 'src/app/models/category-movie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  iconToShow: string = 'menu';
  menuOpen = false;
  genreMenuOpen = false;
  inCategoryMenu = false;
  menuCategoryMovies: CategoryMovie[] = [];
  isInfoPage: boolean = false;

  ngOnInit() {
    this.categoryMovies();
    this.route.url.subscribe(segments => {
      this.isInfoPage = segments.some(segment => segment.path === 'movie' || segment.path === 'profile' || segment.path === 'library');
    });
  }

  toggleMenu() {
    if (this.genreMenuOpen) {
      this.closeGenreMenu();
    } else {
      this.menuOpen = !this.menuOpen;
      this.updateIconToShow();
    }
  }

  toggleGenreMenu() {
    this.genreMenuOpen ? this.closeGenreMenu() : this.openGenreMenu();
  }

  openGenreMenu() {
    this.genreMenuOpen = true;
    this.inCategoryMenu = true;
    this.updateIconToShow();
  }

  closeGenreMenu() {
    this.genreMenuOpen = false;
    this.inCategoryMenu = false;
    this.updateIconToShow();
  }

  updateIconToShow() {
    this.iconToShow = this.menuOpen
      ? this.genreMenuOpen
        ? 'keyboard_arrow_left'
        : 'clear'
      : 'menu';
  }

  categoryMovies() {
    this.moviesService.getCategoryMovies()
      .subscribe((response: { genres: CategoryMovie[] }) => {
        this.menuCategoryMovies = response.genres;
      });
  }
}
