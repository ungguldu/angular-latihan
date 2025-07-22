import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee/employee";

@Component({
  selector: 'app-employees',
  imports: [Employee],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

}
