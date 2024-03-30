import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-with-image',
  templateUrl: './content-with-image.component.html',
  styleUrls: ['./content-with-image.component.scss']
})
export class ContentWithImageComponent {

    @Input() data:any;
}
