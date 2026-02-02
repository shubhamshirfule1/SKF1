import { HttpClient } from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import { Employee } from '../utils/employee';

@Injectable({
  providedIn: 'root',
})
export class Crudservice {
  
  httpclient:HttpClient=inject(HttpClient);

  _baseurl:string='http://localhost:3000/employees';

  getAllEmployees(){
    return this.httpclient.get<Employee[]>(this._baseurl);
  }

  getEmployeeById(id:any){
    return this.httpclient.get<Employee>(`${this._baseurl}/${id}`);
  }

  createEmployee(employeObj:any){
    return this.httpclient.post<Employee>(`${this._baseurl}`,employeObj);
  }
 
  updateEmployee(id:any, empObj:any){
    return this.httpclient.put<Employee>(`${this._baseurl}/${id}`,empObj);
  }

  deleteEmployee(id:any){
    debugger
    return this.httpclient.delete<Employee>(`${this._baseurl}/${id}`);
  }

}
