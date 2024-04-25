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
      name: 'Vanessa',
      image: 'https://via.placeholder.com/150',
      description: "With four years of dedicated tattooing under my belt and twelve years mastering the art of piercing, I bring a unique blend of Neo-Traditional and Fine Line styles to my craft. Hailing proudly from the Lone Star State, I infuse each piece with the spirit of my Texan roots. As both an artist and a shop owner, I uphold a standard of excellence, ensuring each design reflects my passion and expertise. Whether it's a bold statement or a delicate detail, I approach every project with the same level of dedication, striving to create memorable and meaningful pieces for my clients.",
      tattos: [
        { name: 'Tatto 1', image: 'https://via.placeholder.com/150' },
        { name: 'Tatto 2', image: 'https://via.placeholder.com/150' }
      ]
    },
    {
      id: 2,
      name: 'Carlos',
      image: 'https://via.placeholder.com/150',
      description: "With over two decades of experience, I am a seasoned realism artist known for capturing lifelike portraits. Hailing from Cuba, I bring a rich cultural perspective to my work, fluent in both Spanish and English. As a native Cuban, I infuse my art with vibrant authenticity, offering custom portraits at great day rates, ensuring every client receives a unique and personalized masterpiece.",
      tattos: [
        { name: 'Tatto 3', image: 'https://via.placeholder.com/150' },
        { name: 'Tatto 4', image: 'https://via.placeholder.com/150' }
      ]
    },
    {
      id: 3,
      name: 'Gabby',
      image: 'https://via.placeholder.com/150',
      description: "With six years of expertise, I specialize in cosmetic and anime tattoos, blending two distinct styles into captivating art. Based in sunny San Diego, California, I infuse my work with the vibrant energy of the West Coast. Fluent in Lao, Thai, and conversational in Korean and Japanese, I connect with diverse clients on a deeper level. A candy fanatic at heart, I bring a sweet touch to every design, making each tattoo a deliciously unforgettable experience.",
      tattos: [
        { name: 'Tatto 5', image: 'https://via.placeholder.com/150' },
        { name: 'Tatto 6', image: 'https://via.placeholder.com/150' }
      ]
    }
  ]
}
