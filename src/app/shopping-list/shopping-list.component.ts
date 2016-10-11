import {Component} from '@angular/core';
import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent{
  items: Ingredient[] = [];

  constructor() { }


}
