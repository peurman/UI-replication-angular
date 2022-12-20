import { Component } from '@angular/core';
import { onGoingArray } from '../../assets/data/dataArrays';

@Component({
  selector: 'app-on-going-box',
  templateUrl: './on-going-box.component.html',
  styleUrls: ['./on-going-box.component.scss'],
})
export class OnGoingBoxComponent {
  onGoingIssues = onGoingArray;
}
