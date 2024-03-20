import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent {
  @Input() data:any
  constructor() {
    console.log(this.data)
  }

  getNumbers(numbers: any): number[] {
    const array: any[] = [];
    for (let i = 0; i <= numbers; i++) {
      array.push(i);
    }
    return array;
  }
}
