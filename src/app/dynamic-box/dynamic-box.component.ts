import { Component } from '@angular/core';
import { dynamicArray } from '../../assets/data/dataArrays';

@Component({
  selector: 'app-dynamic-box',
  templateUrl: './dynamic-box.component.html',
  styleUrls: ['./dynamic-box.component.scss'],
})
export class DynamicBoxComponent {
  posts = dynamicArray;
}
