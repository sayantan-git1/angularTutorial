import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url='http://localhost:3000/employees'
  rootUrl='http://localhost:3000'

  constructor(private http:HttpClient) { }
  
  getList(){
    return this.http.get<Employee[]>(this.url)
  }

  postEmployee(formData:any){
    return this.http.post<Employee[]>(this.url,formData)
  }

  getEmployee(id:Employee){
    return this.http.get(`${this.url}/${id}`)
  }

  editEmployee(id:Number, employeeData: any){
    return this.http.put(`${this.url}/${id}`,employeeData)
  }

  deleteEmployee(id:Number){
    return this.http.delete(`${this.url}/${id}`)
  }

  postUser(formData:any){
    return this.http.post(`${this.rootUrl}/users`,formData)
  }
}
