import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  users = [
    {
      name: 'Alpha' ,
      age: 18 ,
      email: 'alpha@gmail.com'
    },
    {
      name: 'Bravo' ,
      age: 28 ,
      email: 'bravo@gmail.com'
    },
    {
      name: 'Charlie' ,
      age: 38 ,
      email: 'charlie@gmail.com'
    },
    {
      name: 'Delta' ,
      age: 48 ,
      email: 'delta@gmail.com'
    },
  ]

  ngOnInit(): void {
  }

}
