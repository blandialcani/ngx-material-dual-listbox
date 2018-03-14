import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [
    {
      id: 1,
      description: 'first'
    },

    {
      id: 2,
      description: 'second'
    }
  ];
}
