import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://i227.photobucket.com/albums/dd278/cgill297/Lasagna.jpg');
  constructor() { }

  ngOnInit() {
  }

}
