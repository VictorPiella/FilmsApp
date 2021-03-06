import { Component, OnInit } from '@angular/core';

import { FilmService } from '../../service/film.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film: any;

  constructor(public _ps: FilmService,
              public route: ActivatedRoute) {

    this.route.params.subscribe( param => {

      console.log(param);
      this._ps.getFilm(param['id'])
      .subscribe( data => {
        console.log(data);
        this.film = data;
      });

    });
  }

  ngOnInit() {
  }

}
