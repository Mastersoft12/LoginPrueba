import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-overview',
  templateUrl: './select-overview.component.html',
  styleUrls: ['./select-overview.component.css']
})
export class SelectOverviewComponent implements OnInit {

  foods = [
    {value: 'steak-0' , viewValue: 'Steak' },
    {value: 'pizza-1' , viewValue: 'Pizza' },
    {value: 'tacos-2' , viewValue: 'Tacos' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
