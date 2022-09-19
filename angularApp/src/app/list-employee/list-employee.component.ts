import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private emp: EmployeeService) { }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.getEmployees();
   }

  getEmployees() {
    this.emp.getList().subscribe((employees: Employee[]) => {
      this.employees = employees
    })
  }

  deleteEmployee(id: number) {
    return this.emp.deleteEmployee(id).subscribe((response) => {
      this.getEmployees()
    })
  }
}
