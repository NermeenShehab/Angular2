import { Component} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  name:string="nero";


savedata(data:string){
  console.log(data)
}
  constructor() { }



}
