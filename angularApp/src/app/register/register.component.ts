import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false

  constructor(private emp:EmployeeService) { }

  ngOnInit(): void {
  }

  registerUser = new FormGroup({    
    name: new FormControl('',[Validators.pattern('[A-z ]*'), Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    username: new FormControl('',[Validators.required,Validators.pattern('^[A-z][A-z0-9_]*')]),
    password: new FormControl('',[Validators.required,Validators.pattern('^[A-z][A-z0-9!@#$%^&*()_ ]*')])
  })

  postUser(){
    this.emp.postUser(this.registerUser.value).subscribe()
    this.alert=true
    this.registerUser.reset({})
  }

  closeAlert(){
    this.alert=false
  }

  get name(){
    return this.registerUser.get('name')
  }

  get email(){
    return this.registerUser.get('email')
  }

  get username(){
    return this.registerUser.get('username')
  }

  get password(){
    return this.registerUser.get('password')

  }

}
