import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Crudservice } from '../service/crudservice';

@Component({
  selector: 'app-create-component',
  imports: [ReactiveFormsModule,CommonModule,RouterLink ],
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
})
export class CreateComponent implements OnInit{

  createForm:FormGroup= new FormGroup({});
  formbuilder = inject(FormBuilder);
  service=inject(Crudservice);
  router=inject(Router);
  
ngOnInit(): void {
  
  this.createForm=this.formbuilder.group({

    name:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    designation:new FormControl(''),


  });

}


createEmp(){
  debugger
  const formdata = this.createForm.value;
  this.service.createEmployee(formdata).subscribe(data=>({
    this:this.router.navigate(['/dashboard'])
  }));
    
  
}

}
