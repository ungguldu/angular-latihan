import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  sitename =  'Day 2 app'; 
  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
  }
}
