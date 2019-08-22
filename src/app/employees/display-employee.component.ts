import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {

  @Input() employeeId: Employee;

  private _employee: Employee;

  @Input() 
  set employee(val: Employee) {
    this._employee =val;
  }
  get employee(): Employee {
    return this._employee;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    // log all ngOnChange using simpleChanges
    
    console.log(changes);

    //log only previous & current emp name or empID from ngOnChange using simpleChanges 
    

    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

    console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL') );
    console.log('Current : ' + currentEmployee.name);

    // For Each button click this will log the change key for employee and employeId -
    // - previos and current value

    for (const propName of Object.keys(changes)) {
      const change = changes [propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);

      console.log(propName + ' changed from ' + from + ' to ' + to);
    }


  }

}
