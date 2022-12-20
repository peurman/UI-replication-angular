import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  name = 'Serati Ma';
  business = 'Marketing';
  platform = 'Pricing';
  techDepartment = 'MKT Unit';
  items = 56;
  ranking = 8;
  totalUsers = 24;
  visits = '2,223';
}
