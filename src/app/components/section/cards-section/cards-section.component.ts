import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent {
  @Input() heading:any;
  @Input() sideDrawer:any;
  @Input() cardsData:any;
}
