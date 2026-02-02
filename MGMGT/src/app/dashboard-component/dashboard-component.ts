import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../utils/employee';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Crudservice } from '../service/crudservice';

@Component({
  selector: 'app-dashboard-component',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './dashboard-component.html',
  styleUrls: ['./dashboard-component.css',]
})
export class DashboardComponent implements OnInit {

  empid: any;
  employees: Employee[] = [];

  crudrepo = inject(Crudservice);
  router = inject(Router);

  route = inject(ActivatedRoute);
  ngOnInit(): void {

    this.crudrepo.getAllEmployees().subscribe({
      next: (data) => { this.employees = data; },
      error: (err) => console.error('Failed to load employees', err)
    });

    // this.route.paramMap.subscribe(data=>{

    //   this.empid = data.get('id');
    // });

  }

  deleteEmployee(empid: any) {

    this.crudrepo.deleteEmployee(empid).subscribe(() => {
      this.crudrepo.getAllEmployees().subscribe((data) => {this.employees = data});


    })
  }
}

