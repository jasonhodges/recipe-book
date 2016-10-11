import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header.component";
import {RecipeModule} from "./recipes/recipes.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {DropdownDirective} from "./shared/directives/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipeModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
