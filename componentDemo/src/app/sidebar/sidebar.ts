import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  title = 'admin panel';
  
  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

}
