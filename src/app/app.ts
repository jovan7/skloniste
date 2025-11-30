import { Component, signal } from '@angular/core';
import {Header} from './core/layout/header/header';
import {RouterOutlet} from '@angular/router';
import {Footer} from './core/layout/footer/footer';
import {Donations} from './core/layout/donations/donations';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterOutlet,
    Footer,
    Donations
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skloniste');
}
