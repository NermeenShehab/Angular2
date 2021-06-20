import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import {FormsModule}from'@angular/forms';
import { DepartComponent } from './components/employee/depart/depart.component';
import { SliderComponent } from './components/employee/slider/slider.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
