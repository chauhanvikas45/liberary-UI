(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Mock_data/mock_data_inventory.ts":
/*!**************************************************!*\
  !*** ./src/app/Mock_data/mock_data_inventory.ts ***!
  \**************************************************/
/*! exports provided: mock_inventory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock_inventory", function() { return mock_inventory; });
var mock_inventory = [{
        bookId: 1,
        bookName: "JAVA",
        authorName: "AAAA",
        category: "X",
        bookPrice: 11
    },
    {
        bookId: 2,
        bookName: "JAVA2",
        authorName: "BBBB",
        category: "Y",
        bookPrice: 22
    }
];


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"padding: 15px;\"> This is the about page that describes your app</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/add-book/add-book.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-book/add-book.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form{\r\n    position: fixed;\r\n    width: 70%;\r\n    left: 10;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWJvb2svYWRkLWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsUUFBUTtJQUNSLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ib29rL2FkZC1ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3Jte1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGxlZnQ6IDEwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/add-book/add-book.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-book/add-book.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Book Name\" >\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Author Name\" >\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Category\" >\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"price\" >\n  </mat-form-field>\n\n</form>\n</div>"

/***/ }),

/***/ "./src/app/add-book/add-book.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-book/add-book.component.ts ***!
  \************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddBookComponent = /** @class */ (function () {
    function AddBookComponent() {
    }
    AddBookComponent.prototype.ngOnInit = function () {
    };
    AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/add-book/add-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _left_nav_inventory_left_nav_inventory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./left-nav-inventory/left-nav-inventory.component */ "./src/app/left-nav-inventory/left-nav-inventory.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/add-book/add-book.component.ts");












var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
    { path: 'inventory', component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"] },
    { path: 'left-nav-inventory', component: _left_nav_inventory_left_nav_inventory_component__WEBPACK_IMPORTED_MODULE_9__["LeftNavInventoryComponent"] },
    { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeComponent"] },
    { path: 'add-book', component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_11__["AddBookComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n-->\n<div>\n  <app-header></app-header>\n</div>\n\n<div>\n  <app-footer></app-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'liberary-UI';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _left_nav_inventory_left_nav_inventory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./left-nav-inventory/left-nav-inventory.component */ "./src/app/left-nav-inventory/left-nav-inventory.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/add-book/add-book.component.ts");










//import {FormsModule, ReactiveFormsModule} from '@angular/forms';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"],
                _left_nav_inventory_left_nav_inventory_component__WEBPACK_IMPORTED_MODULE_14__["LeftNavInventoryComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeComponent"],
                _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_17__["AddBookComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  employee page works!\n</p>\n"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  left: 0;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsT0FBTztFQUNQLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"footer\">\n  <p align= \"center\">\n    @copyrights to 7N\n  </p>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar color=\"primary\">\n    <h1>\n      Book Store\n    </h1>\n    <button mat-button routerLink=\"/home\">Home</button>\n    <button mat-button routerLink=\"/about\">About</button></mat-toolbar><router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.cms-boxes .cms-boxes-outer {\r\n  text-align: left;\r\n  margin-bottom: 6px;\r\n  padding: 0 3px;\r\n}\r\nsection.cms-boxes .cms-boxes-outer .cms-boxes-items {\r\n  height: 350px;\r\n  display: table;\r\n  width: 100%;\r\n}\r\nsection.cms-boxes .cms-boxes-outer .cms-boxes-items p {\r\n  color: #fff;\r\n}\r\nsection.cms-boxes .cms-features {\r\n  background-color: #b70457;\r\n}\r\nsection.cms-boxes .boxes-align {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\nsection.cms-boxes .small-box,\r\nsection.cms-boxes .large-box {\r\n  max-width: 350px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\nsection.cms-boxes .cms-boxes-items h2 {\r\n  font-size: 35px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  line-height: 37px;\r\n  text-align: center;\r\n  margin: 20px 0 10px;\r\n  text-transform: uppercase;\r\n}\r\nsection.cms-boxes .cms-security {\r\n  background-color: #0489b7;\r\n}\r\nsection.cms-boxes .cms-security,\r\nsection.cms-boxes .cms-documentation {\r\n  background-color: rgb(66, 16, 88);\r\n}\r\nsection.cms-boxes .cms-scalability {\r\n  background: url(https://www.solodev.com/assets/tiles/scalability.jpg) 0 0 no-repeat;\r\n  background-size: cover;\r\n}\r\nsection.cms-boxes .cms-built {\r\n  background: url(https://www.solodev.com/assets/tiles/customer-service.jpg) 0 0 no-repeat;\r\n  background-size: cover;\r\n}\r\nsection.cms-boxes .cms-security, section.cms-boxes .cms-documentation {\r\n  background-color: rgb(66, 16, 88);\r\n}\r\nsection.cms-boxes .cms-boxes-items:hover {\r\n  opacity: .2;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0ZBQXdGO0VBQ3hGLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbi5jbXMtYm94ZXMgLmNtcy1ib3hlcy1vdXRlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgcGFkZGluZzogMCAzcHg7XHJcbn1cclxuc2VjdGlvbi5jbXMtYm94ZXMgLmNtcy1ib3hlcy1vdXRlciAuY21zLWJveGVzLWl0ZW1zIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnNlY3Rpb24uY21zLWJveGVzIC5jbXMtYm94ZXMtb3V0ZXIgLmNtcy1ib3hlcy1pdGVtcyBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5zZWN0aW9uLmNtcy1ib3hlcyAuY21zLWZlYXR1cmVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcwNDU3O1xyXG59XHJcbnNlY3Rpb24uY21zLWJveGVzIC5ib3hlcy1hbGlnbiB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnNlY3Rpb24uY21zLWJveGVzIC5zbWFsbC1ib3gsXHJcbnNlY3Rpb24uY21zLWJveGVzIC5sYXJnZS1ib3gge1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnNlY3Rpb24uY21zLWJveGVzIC5jbXMtYm94ZXMtaXRlbXMgaDIge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggMCAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuc2VjdGlvbi5jbXMtYm94ZXMgLmNtcy1zZWN1cml0eSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0ODliNztcclxufVxyXG5zZWN0aW9uLmNtcy1ib3hlcyAuY21zLXNlY3VyaXR5LFxyXG5zZWN0aW9uLmNtcy1ib3hlcyAuY21zLWRvY3VtZW50YXRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTYsIDg4KTtcclxufVxyXG5zZWN0aW9uLmNtcy1ib3hlcyAuY21zLXNjYWxhYmlsaXR5IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuc29sb2Rldi5jb20vYXNzZXRzL3RpbGVzL3NjYWxhYmlsaXR5LmpwZykgMCAwIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbnNlY3Rpb24uY21zLWJveGVzIC5jbXMtYnVpbHQge1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5zb2xvZGV2LmNvbS9hc3NldHMvdGlsZXMvY3VzdG9tZXItc2VydmljZS5qcGcpIDAgMCBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5zZWN0aW9uLmNtcy1ib3hlcyAuY21zLXNlY3VyaXR5LCBzZWN0aW9uLmNtcy1ib3hlcyAuY21zLWRvY3VtZW50YXRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTYsIDg4KTtcclxufVxyXG5zZWN0aW9uLmNtcy1ib3hlcyAuY21zLWJveGVzLWl0ZW1zOmhvdmVyIHtcclxuICBvcGFjaXR5OiAuMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\n      <div>\n        <br>\n      </div>\n      <section class=\"cms-boxes\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-4 cms-boxes-outer\">\n              <div class=\"cms-boxes-items cms-features\">\n                <div class=\"boxes-align\">\n                  <div class=\"small-box\">\n                    <!--<i class=\"fa fa-4x fa-laptop\">&nbsp;</i>-->\n                    <img src=\"../assets/images/inventory.jpg\" (click) = \"redirect('./inventory')\">\n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 cms-boxes-outer\">\n              <div class=\"cms-boxes-items cms-security\">\n                <div class=\"boxes-align\">\n                  <div class=\"small-box\">\n                    <i class=\"fa fa-4x fa-cog\">&nbsp;</i>\n                    <h2>Book Register</h2>\n                    <p>To check issued book.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 cms-boxes-outer\">\n              <div class=\"cms-boxes-items cms-features\">\n                <div class=\"boxes-align\">\n                  <div class=\"small-box\">\n                    <i class=\"fa fa-4x fa-laptop\">&nbsp;</i>\n                    <h2>Employee Details</h2>\n                    <p>To Check employee details.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--\n          <div class=\"row\">\n            <div class=\"col-md-6 cms-boxes-outer\">\n              <div class=\"cms-boxes-items cms-built\">\n                <div class=\"boxes-align\">\n                  <div class=\"large-box\">\n                    <i class=\"fa fa-4x fa-heart\" aria-hidden=\"true\"></i>\n                    <h2>Award-winning customer service</h2>\n                    <p>Award-winning, U.S. based support 24/7. If you need help we are here.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 cms-boxes-outer\">\n              <div class=\"cms-boxes-items cms-documentation\">\n                <div class=\"boxes-align\">\n                  <div class=\"large-box\">\n                    <i class=\"fa fa-4x fa-file-code-o\">&nbsp;</i>\n                    <h2>Documentation</h2>\n                    <p>From connecting data sources to styling reports, we have everything you need to get the most value out of WebCorpCo.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      -->\n    </div>\n\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\">\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.redirect = function (pageName) {
        this.router.navigate([pageName]);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-left-nav-inventory></app-left-nav-inventory> -->\n\n<!-- <form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form> -->\n<!-- <table mat-table >\n   <th mat-header-cell><tr><td>Id</td><td>Name</td><td>Author</td><td>Category</td><td>Price</td></tr></th>\n<div *ngFor=\"let inventory of mockInventory\">\n    <tr>\n      <td >{{inventory.bookId}}</td>\n      <td >{{inventory.bookName}}</td>\n      <td >{{inventory.authorName}}</td>\n      <td >{{inventory.category}}</td>\n      <td >{{inventory.bookPrice}}</td>\n    </tr>\n</div>\n</table> -->\n\n<div class=\"example-container mat-elevation-z8\">\n\t<div class=\"example-header\">\n\t\t<mat-form-field>\n\t\t\t<input matInput #filter (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n\t\t\t<button mat-icon-button matSuffix aria-label=\"clear\" *ngIf=\"filter.value\" (click)=\"filter.value=''; applyFilter('');\">\n        <mat-icon>close</mat-icon>\n      </button>\n\t\t</mat-form-field>\n\t</div>\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.bookId}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.bookName}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"author\">\n    <th mat-header-cell *matHeaderCellDef> Author </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.authorName}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"category\">\n    <th mat-header-cell *matHeaderCellDef> Category </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\n  </ng-container>\n\n  <!--price column-->\n  <ng-container matColumnDef=\"price\">\n    <th mat-header-cell *matHeaderCellDef> Price </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.bookPrice}} </td>\n  </ng-container>\n\n  <!--Action column-->\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef> Action </th>\n    <td mat-cell *matCellDef=\"let element\"><button mat-button (click)=\"editItem(row)\">edit</button></td>\n  </ng-container>\n\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n<button mat-button color=\"primary\" (click)=\"addBook()\">Add book</button>\n\n\n"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Mock_data_mock_data_inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mock_data/mock_data_inventory */ "./src/app/Mock_data/mock_data_inventory.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(router) {
        this.router = router;
        this.mockInventory = _Mock_data_mock_data_inventory__WEBPACK_IMPORTED_MODULE_2__["mock_inventory"];
        this.displayedColumns = ['id', 'name', 'author', 'category', 'price', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.mockInventory);
    }
    InventoryComponent.prototype.ngOnInit = function () {
        console.log("MOCK DATA--", this.mockInventory);
    };
    InventoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    InventoryComponent.prototype.editItem = function (item) {
        console.log("edit method called " + item);
        //this.store.dispatch(new itemsActions.SetCurrentItemId(item.bookId));
        //this.router.navigate(['/items', item.bookId, 'edit'])
    };
    InventoryComponent.prototype.addBook = function () {
        console.log("in add book form");
        this.router.navigate(['./add-book']);
    };
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/left-nav-inventory/left-nav-inventory.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/left-nav-inventory/left-nav-inventory.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlZnQtbmF2LWludmVudG9yeS9sZWZ0LW5hdi1pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/left-nav-inventory/left-nav-inventory.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/left-nav-inventory/left-nav-inventory.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div>\n    <ul>\n      <li><button (click)=\"openForm()\">Search</button></li>\n      <li><button (click)=\"openForm()\">Add</button></li>\n      <li><button (click)=\"openForm()\">Modify</button></li>\n      <li><button (click)=\"openForm()\">Delete</button></li>\n    </ul>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/left-nav-inventory/left-nav-inventory.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/left-nav-inventory/left-nav-inventory.component.ts ***!
  \********************************************************************/
/*! exports provided: LeftNavInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavInventoryComponent", function() { return LeftNavInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftNavInventoryComponent = /** @class */ (function () {
    function LeftNavInventoryComponent() {
    }
    LeftNavInventoryComponent.prototype.ngOnInit = function () {
    };
    LeftNavInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left-nav-inventory',
            template: __webpack_require__(/*! ./left-nav-inventory.component.html */ "./src/app/left-nav-inventory/left-nav-inventory.component.html"),
            styles: [__webpack_require__(/*! ./left-nav-inventory.component.css */ "./src/app/left-nav-inventory/left-nav-inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftNavInventoryComponent);
    return LeftNavInventoryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form>\n    <div>\n      <p align=\"center\">Login Form </p>\n      <div>\n        <table border=1 align=\"center\">\n          <tr>\n            <td>UserName :</td>\n            <input type=\"text\" name=\"usernmae\" id=\"username\"/></tr>\n          <tr>\n            <td>Password :</td>\n            <input type=\"password\" name=\"password\" id=\"password\"/></tr>\n\n        </table>\n      </div>\n      <div align=\"center\">\n        <button routerLink=\"/home\">Login</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vikas.chauhan\Documents\liberary-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map