import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
