import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
})
export class RadarChartComponent {
  personal = 34;
  team = 22;
  department = 23;
  handleClick(event:any) {
    alert(`this is a test, event type: "${event.type}", alt content: "${event.target.alt}"`)
  }
}
