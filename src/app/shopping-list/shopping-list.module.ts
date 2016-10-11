import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {CommonModule} from "@angular/common";

@NgModule ({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  providers: []
})

export class ShoppingListModule {}
