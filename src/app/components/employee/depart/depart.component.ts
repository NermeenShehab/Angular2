import { Component  } from '@angular/core';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent  {
 show(data:string){
  data=this.name;
  console.log(data)
 }

 name:string="nero"

  constructor() { }

  
}
