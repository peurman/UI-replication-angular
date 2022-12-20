import { Component, Input } from '@angular/core';
import { OnGoingBox } from '../../assets/data/dataArrays';

@Component({
  selector: 'app-on-going-card',
  templateUrl: './on-going-card.component.html',
  styleUrls: ['./on-going-card.component.scss'],
})
export class OnGoingCardComponent {
  @Input() issueObj: OnGoingBox = {
    imgUrl: '',
    title: '',
    content: '',
    subtitle: '',
    published: '',
  };
}
