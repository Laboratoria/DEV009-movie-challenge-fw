import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'',
    component: NavMenuComponent,
    children:[
      { path:'search', component: SearchComponent },
      { path:'movie-list', component: MovieListComponent },
      { path:'movie-filter', component:MovieFilterComponent },
      { path:'movie/:id', component: MovieDetailComponent },
      { path:'**', redirectTo: ''}
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
