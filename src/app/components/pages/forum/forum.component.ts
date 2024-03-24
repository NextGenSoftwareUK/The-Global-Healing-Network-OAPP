import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  heading = null;
  cardsData = [
    {
      id: 1,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Attend Live Events',
      barWidth: 30,
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      profilePicture: 'assets/images/admin-img.png',
      name: 'Admin',
      totalComments: 2,
      url: '',
      actions: true
    },
    {
      id: 2,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Attend Live Events',
      barWidth: 30,
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      profilePicture: 'assets/images/admin-img.png',
      name: 'Admin',
      totalComments: 4,
      url: '',
      actions: true
    },
    {
      id: 3,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Attend Live Events',
      barWidth: 30,
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      profilePicture: 'assets/images/admin-img.png',
      name: 'Admin',
      totalComments: 5,
      url: '',
      actions: true
    },
    {
      id: 4,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Attend Live Events',
      barWidth: 30,
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      profilePicture: 'assets/images/admin-img.png',
      name: 'Admin',
      totalComments: 7,
      url: '',
      actions: true
    },
    {
      id: 5,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Attend Live Events',
      barWidth: 30,
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      profilePicture: 'assets/images/admin-img.png',
      name: 'Admin',
      totalComments: 9,
      url: '',
      actions: true
    },
    {
      id: 6,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Attend Live Events',
      barWidth: 30,
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      profilePicture: 'assets/images/admin-img.png',
      name: 'Admin',
      totalComments: 6,
      url: '',
      actions: true
    },
  ]
}
