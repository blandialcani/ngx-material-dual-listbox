import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedItems: any[] = [];
  items = [
    {
      id: 1,
      description: 'first'
    },

    {
      id: 2,
      description: 'second'
    },

    {
      id: 3,
      description: 'third'
    },

    {
      id: 4,
      description: 'fourth'
    },

    {
      id: 5,
      description: 'fifth'
    }
  ];
  public itemAdded = (item) => console.log('Item added: ', item);

  public itemRemoved = (item) => console.log('Item removed: ', item);
  public changeList = () => this.items = [
    {
      id: 1,
      description: 'changedfirst'
    },

    {
      id: 2,
      description: 'changedsecond'
    },

    {
      id: 3,
      description: 'changedthird'
    },

    {
      id: 4,
      description: 'changedfourth'
    },

    {
      id: 5,
      description: 'changedfifth'
    }
  ];
}
