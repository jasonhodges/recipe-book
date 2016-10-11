import { Component, EventEmitter, Output } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Lasagna', 'delicious', 'http://i227.photobucket.com/albums/dd278/cgill297/Lasagna.jpg', []),
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
