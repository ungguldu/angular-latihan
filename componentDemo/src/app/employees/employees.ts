import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee/employee";

@Component({
  selector: 'app-employees',
  imports: [Employee],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {
  sitename = 'Day 2 app';

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

}
