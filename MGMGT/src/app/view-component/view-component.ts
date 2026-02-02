import { Component,  inject,  OnInit } from '@angular/core';
import { Crudservice } from '../service/crudservice';
import { Employee } from '../utils/employee';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-component',
  imports: [CommonModule,RouterLink],
  templateUrl: './view-component.html',
  styleUrl: './view-component.css',
})
export class ViewComponent  implements OnInit{

  empid:any;
  empDetails!:Employee;
  service = inject(Crudservice);
  ActivatedRoute = inject(ActivatedRoute);


  ngOnInit(): void {

    this.ActivatedRoute.paramMap.subscribe(res=>{
      this.empid=res.get('id');
    })

    this.service.getEmployeeById(this.empid).subscribe(data=>{
      this.empDetails=data;
      
    })
    
  }

}
