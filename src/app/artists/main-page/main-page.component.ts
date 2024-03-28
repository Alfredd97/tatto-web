import { Component } from '@angular/core';

import { Artist } from './../interfaces/Artist';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  artists: Artist[] =
  [
     {
      id: 1,
      name: 'Artist 1',
      image: 'https://via.placeholder.com/150',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tattos: [
        { name: 'Tatto 1', image: 'https://via.placeholder.com/150' },
        { name: 'Tatto 2', image: 'https://via.placeholder.com/150' }
      ]
    },
    {
      id: 2,
      name: 'Artist 2',
      image: 'https://via.placeholder.com/150',
      description: 'Description 2',
      tattos: [
        { name: 'Tatto 3', image: 'https://via.placeholder.com/150' },
        { name: 'Tatto 4', image: 'https://via.placeholder.com/150' }
      ]
    },
    {
      id: 3,
      name: 'Artist 3',
      image: 'https://via.placeholder.com/150',
      description: 'Description 3',
      tattos: [
        { name: 'Tatto 5', image: 'https://via.placeholder.com/150' },
        { name: 'Tatto 6', image: 'https://via.placeholder.com/150' }
      ]
    }
  ]
}
