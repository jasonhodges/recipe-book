"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ShoppingListAddComponent = (function () {
    function ShoppingListAddComponent() {
    }
    ShoppingListAddComponent.prototype.ngOnInit = function () {
    };
    ShoppingListAddComponent = __decorate([
        core_1.Component({
            selector: 'rb-shopping-list-add',
            templateUrl: './shopping-list-add.component.html',
            styleUrls: ['./shopping-list-add.component.sass']
        })
    ], ShoppingListAddComponent);
    return ShoppingListAddComponent;
}());
exports.ShoppingListAddComponent = ShoppingListAddComponent;
//# sourceMappingURL=shopping-list-add.component.js.map