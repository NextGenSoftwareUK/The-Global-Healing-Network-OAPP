import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    contentWithImageSectionData:any = {
        heading: "The Love Beam",
        description: `The LOVE BEAM is a powerful way to channel the magical healing energy all the healers 
                        (and people who do not even think they are a healer!) around the world to heal anyone, 
                        any animal, nature and even stop wars! That is how POWERFUL we ALL are! It is time 
                        to unleash the YOUR FULL potential and show the world how powerful we are when 
                        we work together!`,
        sectionBtn: {
            buttonText: "Sent a Request",
            buttonUrl: "#"
        },
        sectionImage: "love-beam-img.png",
        extraClass: ""
    }
}
