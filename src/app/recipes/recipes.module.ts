import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";

@NgModule ({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [

  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  providers: []
})

export class RecipeModule {}
