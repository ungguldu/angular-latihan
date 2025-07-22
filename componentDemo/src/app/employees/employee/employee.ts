import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee implements OnInit {
  employees = [
    { name: 'Alice Johnson', age: 28, gender: 'Female', photo: 'https://i.pravatar.cc/80?img=1' },
    { name: 'Bob Smith', age: 35, gender: 'Male', photo: 'https://i.pravatar.cc/80?img=2' },
    { name: 'Charlie Brown', age: 42, gender: 'Male', photo: 'https://i.pravatar.cc/80?img=3' },
    { name: 'Diana Prince', age: 30, gender: 'Female', photo: 'https://i.pravatar.cc/80?img=4' },
    { name: 'Evan Lee', age: 26, gender: 'Male', photo: 'https://i.pravatar.cc/80?img=5' },
    { name: 'Fiona Adams', age: 33, gender: 'Female', photo: 'https://i.pravatar.cc/80?img=6' },
    { name: 'George Wang', age: 39, gender: 'Male', photo: 'https://i.pravatar.cc/80?img=7' },
    { name: 'Hannah Kim', age: 27, gender: 'Female', photo: 'https://i.pravatar.cc/80?img=8' },
    { name: 'Ivan Petrov', age: 31, gender: 'Male', photo: 'https://i.pravatar.cc/80?img=9' },
    { name: 'Julia Martinez', age: 29, gender: 'Female', photo: 'https://i.pravatar.cc/80?img=10' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
