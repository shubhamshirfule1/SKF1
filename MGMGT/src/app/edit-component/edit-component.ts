import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Crudservice } from '../service/crudservice';
import { Employee } from '../utils/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css',
})
export class EditComponent implements OnInit {
  empId: any;
  empdetails!: Employee;
  service = inject(Crudservice);
  router = inject(Router);
  activatedRouter = inject(ActivatedRoute)
  updateForm: FormGroup = new FormGroup({
    'name': new FormControl(null),
    'email': new FormControl(null),
    'mobile': new FormControl(null),
    'designation': new FormControl(null),

  });
  formBuilder = inject(FormBuilder);





  
  ngOnInit(): void {
    debugger
    this.activatedRouter.paramMap.subscribe(data => {
      this.empId = data.get('id');
    });


    if (this.empId) {
      this.service.getEmployeeById(this.empId).subscribe(res => {
        this.updateForm = this.formBuilder.group({
          'name': new FormControl(res.name),
          'email': new FormControl(res.email),
          'mobile': new FormControl(res.mobile),
          'designation': new FormControl(res.designation),

        })
      });
    }
  }


  updateEmp() {
    const formdata = this.updateForm.value;
    this.service.updateEmployee(this.empId,formdata).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });

  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
