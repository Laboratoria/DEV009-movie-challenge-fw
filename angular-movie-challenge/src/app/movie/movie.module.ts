import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MovieListComponent } from '../movie/movie-list/movie-list.component';
import { MovieFilterComponent } from '../movie/movie-filter/movie-filter.component';
import { NavMenuComponent } from '../movie/nav-menu/nav-menu.component';
import { SearchComponent } from '../movie/search/search.component';
import { MovieDetailComponent } from '../movie/movie-detail/movie-detail.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieServiceService } from '../service/service.service';
import { ComunicationMovieService } from '../service-comunication/comunication-movie.service';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieFilterComponent,
    NavMenuComponent,
    SearchComponent,
    MovieDetailComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ],
  providers: [
    MovieServiceService,
    ComunicationMovieService
  ],
})
export class MovieModule { }
