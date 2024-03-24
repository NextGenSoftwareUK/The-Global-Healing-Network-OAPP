import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  heading:any = 'Latest Blogs';
  sideDrawer = true;
  cardsData = [
    {
      id: 1,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      actions: false
    },
    {
      id: 2,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      actions: false
    },
    {
      id: 3,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      actions: false
    },
    {
      id: 4,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      actions: false
    },
    {
      id: 5,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      actions: false
    },
    {
      id: 6,
      imgSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      description: `Lorem Ipsum is simply dummy text of the industry's since the unknown.`,
      actions: false
    },
  ]
}
