import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {

    contentWithImageSectionData:any = {
        heading: "Connect to Your Audience",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry 
                    orem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown. Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry orem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown.Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown.`,
        sectionImage: "love-beam-img.png",
        extraClass: "section-with-image-container-style-2"
    }

  heading = 'Latest Podcast';
  cardsData = [
    {
      id: 1,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
    {
      id: 2,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
    {
      id: 3,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
    {
      id: 4,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
    {
      id: 5,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
    {
      id: 6,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
    {
      id: 7,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
    {
      id: 8,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
    {
      id: 9,
      vedioSrc: 'assets/images/card-img.png',
      heading: 'Finding Moments Of Joy in a challenging Year',
      categories: ['Fashion', 'LifeStyle'],
      vedioCard: true
    },
  ]
}
