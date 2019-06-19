import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../service/peliculas.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films: any;

  constructor(public _ps: PeliculasService,
              public route: ActivatedRoute) {

    this._ps.getPopulares()
    .subscribe( data => {
      console.log(data);
      this.films = data['results'];
    });

}

  ngOnInit() {
  }

}
