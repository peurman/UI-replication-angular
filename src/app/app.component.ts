import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  pContent = 'testing this component!';
  inputValue = 'Insert text here...';
  constructor() {
    this.title = 'Manru-Week4';
  }
}
