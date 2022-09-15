import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular'
  childUser=''
  users = [
    {
      name: 'bruce wayne',
      age: 40,
      email: 'batman@gmail.com'
    },
    {
      name: 'wonder woman',
      age: 30,
      email: 'woman@gmail.com'
    },
    {
      name: 'barry allen',
      age: 40,
      email: 'flash@gmail.com'
    },
  ];

  parentFunction(user:any) {  
    this.childUser=user
  }
}
