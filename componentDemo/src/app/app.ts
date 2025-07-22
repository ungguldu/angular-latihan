import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Sidebar } from "./sidebar/sidebar";
import { Employees } from "./employees/employees";

@Component({
  selector: 'app-root',
  imports: [Navbar, Sidebar, Employees],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componentDemo');
}
