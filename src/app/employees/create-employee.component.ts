import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit { 
  
  dateOfBirth: Date = new Date(2015, 0 ,15);
  datePickerConfig: Partial<BsDatepickerConfig>;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];  

  constructor() { 
    this.datePickerConfig = Object.assign({}, 
      {
       containerClass: 'theme-dark-blue',
       showWeekNumbers: false,
       minDate: new Date(1900, 0 , 1),
       maxDate: new Date(2045, 0, 1),
       dateInputFormat: 'DD/MM/YY'
      });
  }

  ngOnInit() {
    
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
    console.log(employeeForm);
  }
  
}
