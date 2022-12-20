import { Component } from '@angular/core';
import { teamsArray } from '../../assets/data/dataArrays';

@Component({
  selector: 'app-team-box',
  templateUrl: './team-box.component.html',
  styleUrls: ['./team-box.component.scss'],
})
export class TeamBoxComponent {
  teams = teamsArray;
}
