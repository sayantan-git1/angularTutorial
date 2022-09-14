import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() users: any
  @Output() parentFunction:EventEmitter<any> = new EventEmitter()
  constructor() { }
  
  user='Tony Stark'
  
  ngOnInit(): void {}
  
  sendData(){
    this.parentFunction.emit(this.user)
  }

}
