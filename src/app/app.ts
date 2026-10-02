import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { CommonModule } from '@angular/common';
import { BaseUi } from './components/base-ui/base-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, CommonModule, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('projeto');
  exibeNavbar: boolean = true;
}
