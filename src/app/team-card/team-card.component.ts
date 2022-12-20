import { Component, Input } from '@angular/core';
import { TeamBox } from '../../assets/data/dataArrays';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent {
  @Input() teamObj: TeamBox = {
    imgUrl: '',
    textTeam: '',
  };
}
