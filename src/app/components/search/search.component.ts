import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: '';
  films: any;
  constructor(public _ps: PeliculasService) { }

  ngOnInit() {
  }
  searchFilm() {
    if (this.search.length === 0) {
      return;
    }
    this._ps.searchFilm(this.search)
    .subscribe( data => {
      this.films = data['results'];
    });


  }


}
