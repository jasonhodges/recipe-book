import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
