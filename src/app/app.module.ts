import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';
import { appRouting } from './app.routes';
import { FilmImagePipe } from './pipes/film-image.pipe';
import { SearchComponent } from './components/search/search.component';
import { FilmlistComponent } from './components/filmlist/filmlist.component';
import { PopularComponent } from './components/popular/popular.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FilmComponent,
    FilmImagePipe,
    SearchComponent,
    FilmlistComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
