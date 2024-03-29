import { Component, Input } from '@angular/core';
import { Artist } from '../interfaces/Artist';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() artist!: Artist;
}
