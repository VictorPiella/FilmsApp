import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'film/:id/:pag', component: FilmComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
