import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../service/film.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  films: any;

  constructor(public _fs: FilmService,
              public route: ActivatedRoute) {

    this._fs.getPopulars()
    .subscribe( data => {
      this.films = data['results'];
    });

}
  ngOnInit() {
  }

}
