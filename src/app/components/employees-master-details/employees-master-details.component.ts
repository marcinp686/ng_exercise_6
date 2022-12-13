import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/restapiexample.service';

@Component({
  selector: 'app-employees-master-details',
  templateUrl: './employees-master-details.component.html',
  styleUrls: ['./employees-master-details.component.scss']
})
export class EmployeesMasterDetailsComponent implements OnInit {

  public employees!        : Observable<Employee[]>;
  
  public selectedEmployee : Subject<Employee> = new Subject<Employee>()  ;

  constructor(private restApiExample: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.restApiExample.getEmployees();
  }

  onEmployeeSelect(employee: Employee) : void {
    this.selectedEmployee.next( employee );       
  }

}
