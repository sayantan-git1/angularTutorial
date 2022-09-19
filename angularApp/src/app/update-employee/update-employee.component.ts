import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public employeeFormGroup: FormGroup;

  constructor(private emp:EmployeeService, private router: ActivatedRoute, private route:Router, private fb: FormBuilder) {
    this.employeeFormGroup = new FormGroup({    
      name: new FormControl('',[Validators.pattern('[A-z ]*'), Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      salary: new FormControl('',[Validators.required, Validators.pattern('^[0-9]*$')])
    })
  }

  alert:boolean = false

  ngOnInit(): void {

    this.emp.getEmployee(this.router.snapshot.params['id']).subscribe((employee: Employee) => {

      this.employeeFormGroup.patchValue(employee);

      console.log(employee)

      // this.employee.patchValue({
      //     name: employee.name
      //   });

        console.log(this.employeeFormGroup)
    })
  }
  
  editEmployee(){
    this.emp.editEmployee(this.router.snapshot.params['id'],this.employeeFormGroup.value).subscribe()
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
    return this.employeeFormGroup.get('name')
  }

  get email(){
    return this.employeeFormGroup.get('email')
  }

  get salary(){
    return this.employeeFormGroup.get('salary')
  }

}
