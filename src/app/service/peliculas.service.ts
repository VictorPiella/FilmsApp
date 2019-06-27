import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = 'b495508822123fbd610dda736b801764';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  filmSearch: any = [];

  constructor( private http: HttpClient) { }


  getCartelera() {

    const sinceDate = new Date();
    const toDate = new Date();
    toDate.setDate(toDate.getDate() + 7);

    const sinceStr = `${ sinceDate.getFullYear()}-${sinceDate.getMonth() + 1}-${sinceDate.getDay()}`;
    const toStr = `${ toDate.getFullYear()}-${toDate.getMonth() + 1}-${toDate.getDay()}`;

    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${sinceStr}&primary_release_date.lte=${toStr}
    &api_key=${ this.apikey }&languges=es`;

    return this.http.jsonp( url , 'callback');
  }
  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&languges=es`;
     return this.http.jsonp( url , 'callback');
  }

  searchFilm(search: string) {
    const url = `${this.urlMoviedb}/search/movie?api_key=${ this.apikey }&language=es&query=${search}`;
    this.filmSearch = this.http.jsonp( url , 'callback');
     return this.filmSearch;
  }
  getFilm(id: string) {
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${ this.apikey }`;
     return this.http.jsonp( url , 'callback');
  }

}
