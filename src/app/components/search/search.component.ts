import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../service/film.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: '';
  films: any;
  constructor(public _fs: FilmService) { }

  ngOnInit() {
  }
  searchFilm() {
    if (this.search.length === 0) {
      return;
    }
    this._fs.searchFilm(this.search)
    .subscribe( data => {
      this.films = data['results'];
    });


  }


}
