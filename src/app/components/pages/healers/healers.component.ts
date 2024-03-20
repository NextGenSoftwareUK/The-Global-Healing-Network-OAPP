import { Component } from '@angular/core';

@Component({
  selector: 'app-healers',
  templateUrl: './healers.component.html',
  styleUrls: ['./healers.component.scss']
})
export class HealersComponent {
  heading = null;
  cardsData = [
    {
      id: 1,
      imgSrc: 'assets/images/single-healer.png',
      heading: 'Healer Name',
      distance: 30,
      stars: 5,
      url: '',
      healingCard: true
    },
    {
      id: 2,
      imgSrc: 'assets/images/single-healer.png',
      heading: 'Healer Name',
      distance: 30,
      stars: 5,
      url: '',
      healingCard: true
    },
    {
      id: 3,
      imgSrc: 'assets/images/single-healer.png',
      heading: 'Healer Name',
      distance: 30,
      stars: 5,
      url: '',
      healingCard: true
    },
    {
      id: 4,
      imgSrc: 'assets/images/single-healer.png',
      heading: 'Healer Name',
      distance: 30,
      stars: 5,
      url: '',
      healingCard: true
    },
    {
      id: 5,
      imgSrc: 'assets/images/single-healer.png',
      heading: 'Healer Name',
      distance: 30,
      stars: 5,
      url: '',
      healingCard: true
    },
    {
      id: 6,
      imgSrc: 'assets/images/single-healer.png',
      heading: 'Healer Name',
      distance: 30,
      stars: 5,
      url: '',
      healingCard: true
    },
  ]
}
