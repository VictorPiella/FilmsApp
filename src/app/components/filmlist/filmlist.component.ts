import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.css']
})
export class FilmlistComponent implements OnInit {

  @Input() films: any;

  constructor() {
  }

  ngOnInit() {
  }

}
