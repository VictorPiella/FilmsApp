import { Component, OnInit } from '@angular/core';

import { FilmService } from '../../service/film.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films: any;

  constructor(public _fs: FilmService,
              public route: ActivatedRoute) {

    this._fs.getBillboard()
    .subscribe( data => {
      this.films = data['results'];
    });

}

  ngOnInit() {
  }

}
