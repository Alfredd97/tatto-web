import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './artists/main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { Router } from 'express';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainPageComponent,
    HomeComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tatto-web';
}
