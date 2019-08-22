import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@mail.com',
            phoneNumber:  "2345978641 ext 101",
            dateOfBirth: new Date('10/25/1988'),
            department: 'IT',
            isActive: true,
            photoPath: 'assets/images/mark.png'
          },
          {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            email: 'mary@mail.com',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('11/20/1979'),
            department: 'HR',
            isActive: true,
            photoPath: 'assets/images/mary.png'
          },
          {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            email: 'john@mail.com',
            phoneNumber: "5432978641 ext 102",
            dateOfBirth: new Date('3/25/1982'),
            department: 'IT',
            isActive: false,
            photoPath: 'assets/images/john.png'
          },
        ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    } 
}