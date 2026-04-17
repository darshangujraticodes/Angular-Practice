import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, RouterLink, CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
