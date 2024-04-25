import { Component, Input } from '@angular/core';
import { Artist } from '../interfaces/Artist';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CardComponent {
  @Input() artist!: Artist;
}
