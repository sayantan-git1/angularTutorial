import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private emp:EmployeeService) { }

  alert:boolean = false

  employees = new FormGroup({    
    name: new FormControl('',[Validators.pattern('[A-z ]*'), Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    salary: new FormControl('',[Validators.required, Validators.pattern('^[0-9]*$')])
  })

  ngOnInit(): void {}
  
  postEmployee(){
    this.emp.postEmployee(this.employees.value).subscribe()
    this.alert=true
    this.employees.reset({})
  }

  closeAlert(){
    this.alert=false
  }

  get name(){
    return this.employees.get('name')
  }

  get email(){
    return this.employees.get('email')
  }

  get salary(){
    return this.employees.get('salary')
  }
}
