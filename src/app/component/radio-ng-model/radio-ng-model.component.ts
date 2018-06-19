import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-radio-ng-model',
  templateUrl: './radio-ng-model.component.html',
  styleUrls: ['./radio-ng-model.component.css']
})
export class RadioNgModelComponent implements OnInit {

  favoriteSeason: string;
  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  clickMe() {
    console.log('Hola');
    this._router.navigate([`/slide`]);
  }

}
