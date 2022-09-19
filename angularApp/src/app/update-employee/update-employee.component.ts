import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private emp:EmployeeService, private router: ActivatedRoute, private route:Router) { }

  alert:boolean = false

  employee = new FormGroup({    
    name: new FormControl('',[Validators.pattern('[A-z ]*'), Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    salary: new FormControl('',[Validators.required, Validators.pattern('^[0-9]*$')])
  })

  ngOnInit(): void {
    this.emp.getEmployee(this.router.snapshot.params['id']).subscribe((employee) => {
        this.employee.patchValue(employee)
        console.log(this.employee)
    })
  }
  
  editEmployee(){
    this.emp.editEmployee(this.router.snapshot.params['id'],this.employee.value).subscribe()
    this.alert=true
    this.redirectToList()
  }

  closeAlert(){
    this.alert=false
  }

  redirectToList(){
    setTimeout(() => {
      this.route.navigate(['/list']);
  }, 5000);
  }

  get name(){
    return this.employee.get('name')
  }

  get email(){
    return this.employee.get('email')
  }

  get salary(){
    return this.employee.get('salary')
  }

}
