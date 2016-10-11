"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shopping_list_component_1 = require("./shopping-list.component");
var shopping_list_add_component_1 = require("./shopping-list-add.component");
var common_1 = require("@angular/common");
var ShoppingListModule = (function () {
    function ShoppingListModule() {
    }
    ShoppingListModule = __decorate([
        core_1.NgModule({
            declarations: [
                shopping_list_component_1.ShoppingListComponent,
                shopping_list_add_component_1.ShoppingListAddComponent
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                shopping_list_component_1.ShoppingListComponent,
                shopping_list_add_component_1.ShoppingListAddComponent
            ],
            providers: []
        })
    ], ShoppingListModule);
    return ShoppingListModule;
}());
exports.ShoppingListModule = ShoppingListModule;
//# sourceMappingURL=shopping-list.module.js.map