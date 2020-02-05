import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.redirect = function (pageName) {
        this.router.navigate([pageName]);
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map