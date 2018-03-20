import {Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ngx-material-duallistbox',
  templateUrl: './ngx-material-duallistbox.component.html',
  styleUrls: ['./ngx-material-duallistbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxMaterialDuallistboxComponent implements OnInit {

  @Output() itemAdded: EventEmitter<any> = new EventEmitter();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter();

  public fullList: any [] = [];
  public itemsFiltered: any [] = [];
  public selectedItemsFiltered: any [] = [];
  public filterText: string;
  public filterSelectedText: string;

  @Input() items: any [] = [];
  @Input() selectedItems: any [] = [];
  @Output() selectedItemsChange = new EventEmitter<any>();

  @Input() descProperty: string = 'description';
  @Input() idProperty: string = 'id';
  @Input() showFilter: boolean = true;
  @Input() height: string = '50vh';
  @Input() filterPlaceholder: string = 'Filter';
  @Input() addIcon: string = 'add';
  @Input() addIconColor: string = 'black';
  @Input() removeIcon: string = 'delete';
  @Input() removeIconColor: string = 'black';
  @Input() textColor: string = 'black';
  @Input() showIcons: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.fullList = this.items;
    this.update();
  }

  update(){
    this.updateItems();
    this.updateSelectedItems();
  }

  updateItems() {
    this.items = _.differenceBy(this.fullList, this.selectedItems, this.idProperty);
    this.filterItems(this.filterText);
  }

  updateSelectedItems() {
    this.selectedItemsFiltered = this.selectedItems;
    this.filterSelectedItems(this.filterSelectedText);
  }

  addItem(item) {
    this.itemAdded.emit(item);
    this.selectedItems.push(item);
    this.update();
  }

  removeItem(item) {
    this.itemRemoved.emit(item);
    this.selectedItems = this.selectedItems.filter(i => item.id != i.id);
    this.selectedItemsChange.emit(this.selectedItems);
    this.update();
  }

  filterItems(text: string){
    this.filterText = text;
    if(!text || !text.replace(" ", "")){
      this.itemsFiltered = this.items;
      return;
    }
    this.itemsFiltered = this.items
      .filter(item => item[this.descProperty].toLowerCase().includes(text.toLowerCase()));
  }

  filterSelectedItems(text: string){
    this.filterSelectedText = text;
    if(!text || !text.replace(" ", "")){
      this.selectedItemsFiltered = this.selectedItems;
      return;
    }
    this.selectedItemsFiltered = this.selectedItems
      .filter(item => item[this.descProperty].toLowerCase().includes(text.toLowerCase()));
  }
}
