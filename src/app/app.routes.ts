import { Routes } from '@angular/router';
import { MainPageComponent } from './artists/main-page/main-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: MainPageComponent },
];
