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
            selector: 'add-book',
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
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/add-book/add-book.component.ts");
/* harmony import */ var _book_register_book_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-register/book-register.component */ "./src/app/book-register/book-register.component.ts");











var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'inventory', component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__["InventoryComponent"] },
    { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeComponent"] },
    { path: 'add-book', component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__["AddBookComponent"] },
    { path: 'book-register', component: _book_register_book_register_component__WEBPACK_IMPORTED_MODULE_10__["BookRegisterComponent"] },
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
    AppComponent.prototype.ngOnInit = function () {
        //   this.inventoryService.get().subscribe(res => {
        //     this.inventory = res;
        //   });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/add-book/add-book.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _book_register_book_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./book-register/book-register.component */ "./src/app/book-register/book-register.component.ts");










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
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_12__["InventoryComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_15__["AddBookComponent"],
                _book_register_book_register_component__WEBPACK_IMPORTED_MODULE_18__["BookRegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogRef"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-register/book-register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/book-register/book-register.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcmVnaXN0ZXIvYm9vay1yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book-register/book-register.component.html":
/*!************************************************************!*\
  !*** ./src/app/book-register/book-register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left: 9%;margin-right: 9%;\">\n<div style=\"margin-left: 40%;\">\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\" (click)=toggle(true)>Issue</mat-button-toggle>\n  <mat-button-toggle value=\"italic\" (click)=toggle(false)>Return</mat-button-toggle>\n  <!-- <mat-button-toggle value=\"underline\">Underline</mat-button-toggle> -->\n</mat-button-toggle-group>\n</div>\n<div id=\"issueForm\" *ngIf=\"showIssueForm\">\n  <div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-header\">\n      <mat-form-field>\n        <input matInput #filter (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        <button mat-icon-button matSuffix aria-label=\"clear\" *ngIf=\"filter.value\" (click)=\"filter.value=''; applyFilter('');\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n    </div>\n<p>\n  issue form\n</p>\n</div>\n</div>\n\n\n<div id=\"returnForm\" *ngIf=\"showReturnForm\">\n  <div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-header\">\n      <mat-form-field>\n        <input matInput #filter (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        <button mat-icon-button matSuffix aria-label=\"clear\" *ngIf=\"filter.value\" (click)=\"filter.value=''; applyFilter('');\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n    </div>\n  <p>\n    return form\n  </p>\n</div>\n</div>\n</div> "

/***/ }),

/***/ "./src/app/book-register/book-register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/book-register/book-register.component.ts ***!
  \**********************************************************/
/*! exports provided: BookRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRegisterComponent", function() { return BookRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_inventoryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/inventoryList */ "./src/app/models/inventoryList.ts");



var BookRegisterComponent = /** @class */ (function () {
    function BookRegisterComponent() {
        this.inventory = new _models_inventoryList__WEBPACK_IMPORTED_MODULE_2__["InventoryList"]();
        this.bookList = [];
        this.displayedColumns = ['id', 'name', 'author', 'category', 'price', 'status'];
    }
    BookRegisterComponent.prototype.ngOnInit = function () {
    };
    BookRegisterComponent.prototype.toggle = function (form) {
        console.log("in show form");
        //this.router.navigate(['./add-book']);
        if (form == true) {
            this.showIssueForm = true;
            this.showReturnForm = false;
        }
        else {
            this.showIssueForm = false;
            this.showReturnForm = true;
        }
    };
    BookRegisterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    BookRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-register',
            template: __webpack_require__(/*! ./book-register.component.html */ "./src/app/book-register/book-register.component.html"),
            styles: [__webpack_require__(/*! ./book-register.component.css */ "./src/app/book-register/book-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookRegisterComponent);
    return BookRegisterComponent;
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

module.exports = ".footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  left: 0;\r\n  text-align: center;\r\n  height: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNSU7XHJcbn1cclxuIl19 */"

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

module.exports = "    <div class=\"container\">\r\n      <div>\r\n        <br>\r\n      </div>\r\n      <section class=\"cms-boxes\">\r\n        <div class=\"container-fluid\" (click) = \"redirect('./inventory')\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 cms-boxes-outer\">\r\n              <div class=\"cms-boxes-items cms-features\">\r\n                <div class=\"boxes-align\">\r\n                  <div class=\"small-box\">\r\n                    <!--<i class=\"fa fa-4x fa-laptop\">&nbsp;</i>-->\r\n                    <img src=\"../assets/images/inventory.jpg\" >\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 cms-boxes-outer\" (click) = \"redirect('./book-register')\">\r\n              <div class=\"cms-boxes-items cms-security\">\r\n                <div class=\"boxes-align\">\r\n                  <div class=\"small-box\">\r\n                    <i class=\"fa fa-4x fa-book\" style=\"color:white\">&nbsp;</i>\r\n                    <h2>Book Register</h2>\r\n                    <p>To check issued book.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 cms-boxes-outer\">\r\n              <div class=\"cms-boxes-items cms-features\">\r\n                <div class=\"boxes-align\">\r\n                  <div class=\"small-box\">\r\n                    <i class=\"fa fa-4x fa-user\"  style=\"color:white\">&nbsp;</i>\r\n                    <h2>Employee Details</h2>\r\n                    <p>To Check employee details.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 cms-boxes-outer\">\r\n              <div class=\"cms-boxes-items cms-built\">\r\n                <div class=\"boxes-align\">\r\n                  <div class=\"large-box\">\r\n                    <i class=\"fa fa-4x fa-heart\" aria-hidden=\"true\"></i>\r\n                    <h2>Award-winning customer service</h2>\r\n                    <p>Award-winning, U.S. based support 24/7. If you need help we are here.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 cms-boxes-outer\">\r\n              <div class=\"cms-boxes-items cms-documentation\">\r\n                <div class=\"boxes-align\">\r\n                  <div class=\"large-box\">\r\n                    <i class=\"fa fa-4x fa-file-code-o\">&nbsp;</i>\r\n                    <h2>Documentation</h2>\r\n                    <p>From connecting data sources to styling reports, we have everything you need to get the most value out of WebCorpCo.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      -->\r\n    </div>\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\">\r\n"

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

/***/ "./src/app/inventory/add-book-form.html":
/*!**********************************************!*\
  !*** ./src/app/inventory/add-book-form.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n<div mat-dialog-content>\r\n  <p>What's your favorite animal?</p>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.animal\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 750px;\r\n}\r\n\r\n.table{\r\n  \r\n  margin-left: 9%;\r\n  margin-right: 9%\r\n}\r\n\r\n.column-width{\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLGVBQWU7RUFDZjtBQUNGOztBQUNBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG59XHJcbi50YWJsZXtcclxuICBcclxuICBtYXJnaW4tbGVmdDogOSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA5JVxyXG59XHJcbi5jb2x1bW4td2lkdGh7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"table\">\r\n<div class=\"example-container mat-elevation-z8\">\r\n\t<div class=\"example-header\">\r\n\t\t<mat-form-field>\r\n\t\t\t<input matInput #filter (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n\t\t\t<button mat-icon-button matSuffix aria-label=\"clear\" *ngIf=\"filter.value\" (click)=\"filter.value=''; applyFilter('');\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n\t\t</mat-form-field>\r\n\t</div>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" *ngIf=\"inventoryTable\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> Id </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.bookName}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"author\">\r\n    <th mat-header-cell *matHeaderCellDef> Author </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.authorName}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n  </ng-container>\r\n\r\n  <!--price column-->\r\n  <ng-container matColumnDef=\"price\">\r\n    <th mat-header-cell *matHeaderCellDef> Price </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.bookPrice}} </td>\r\n  </ng-container>\r\n\r\n  <!-- <ng-container matColumnDef=\"price\" >\r\n    <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\">\r\n      <mat-form-field floatLabel=\"never\" >\r\n        <input matInput placeholder=\"Price\" [value]=\"element.bookPrice\" [(ngModel)]=\"element.bookPrice\">\r\n      </mat-form-field>\r\n    </mat-cell>\r\n  </ng-container> -->\r\n\r\n  <!--Action column-->\r\n  <ng-container matColumnDef=\"status\">\r\n    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.status}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10]\"></mat-paginator>\r\n</div>\r\n\r\n<div>\r\n  <!-- <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"toggle()\" style=\"cursor: pointer\">add</mat-icon> -->\r\n  <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"show\">\r\n  <form class=\"example-form\" name=\"inventory\" id =\"inventory\"  method=\"post\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Book Name\" [(ngModel)]=\"inventory.bookName\" name=\"bookName\" >  \r\n    </mat-form-field>\r\n  \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Author Name\" [(ngModel)]=\"inventory.authorName\" name=\"authorName\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Category\" [(ngModel)]=\"inventory.category\" name=\"category\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"price\" [(ngModel)]=\"inventory.bookPrice\" name=\"bookPrice\" pattern=\"[0-9]{0-4}\">\r\n    </mat-form-field>\r\n    <button mat-button color=\"primary\" id=\"add-book\" (click)=\"addBook()\">Add</button>\r\n  </form>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/inventory.service */ "./src/app/service/inventory.service.ts");
/* harmony import */ var _models_inventoryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/inventoryList */ "./src/app/models/inventoryList.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");







var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(router, inventoryService, dialog) {
        this.router = router;
        this.inventoryService = inventoryService;
        this.dialog = dialog;
        this.inventory = new _models_inventoryList__WEBPACK_IMPORTED_MODULE_5__["InventoryList"]();
        this.bookList = [];
        this.displayedColumns = ['id', 'name', 'author', 'category', 'price', 'status'];
        this.getInventoryList();
    }
    InventoryComponent.prototype.ngOnInit = function () {
        this.inventoryTable = true;
        this.getInventoryList();
    };
    InventoryComponent.prototype.getInventoryList = function () {
        var _this = this;
        this.inventoryService.getReequest('/inventory').subscribe(function (result) {
            _this.bookList = result;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.bookList);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    InventoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    InventoryComponent.prototype.addBook = function () {
        var _this = this;
        this.inventory.status = 'available';
        this.inventoryService.postRequest('/inventory', this.inventory).subscribe(function (result) {
            _this.bookList.push(result);
            _this.dataSource.paginator = _this.paginator;
        });
        this.formClear();
        this.show = false;
    };
    InventoryComponent.prototype.formClear = function () {
        this.inventory.bookName = '';
        this.inventory.authorName = '';
        this.inventory.category = '';
        this.inventory.bookPrice = 0;
        this.inventory.status = 'available';
    };
    InventoryComponent.prototype.toggle = function () {
        console.log("in add book form");
        //this.router.navigate(['./add-book']);
        if (this.show == false) {
            this.inventoryTable = false;
            this.show = true;
        }
        else {
            this.show = false;
            this.inventoryTable = true;
        }
    };
    InventoryComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.inventory.bookName, author: this.inventory.authorName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.bookList = result;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], InventoryComponent.prototype, "paginator", void 0);
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], InventoryComponent);
    return InventoryComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-book-form',
            template: __webpack_require__(/*! ./add-book-form.html */ "./src/app/inventory/add-book-form.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            InventoryComponent])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
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

/***/ "./src/app/models/inventoryList.ts":
/*!*****************************************!*\
  !*** ./src/app/models/inventoryList.ts ***!
  \*****************************************/
/*! exports provided: InventoryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryList", function() { return InventoryList; });
var InventoryList = /** @class */ (function () {
    function InventoryList() {
    }
    return InventoryList;
}());



/***/ }),

/***/ "./src/app/service/inventory.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/inventory.service.ts ***!
  \**********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
        // mockInventory:Inventory[] =mock_inventory;
        this.url = 'http://localhost:3000';
        this.bookList = new Array();
    }
    InventoryService.prototype.getReequest = function (resource) {
        return this.http.get(this.url + resource);
    };
    InventoryService.prototype.postRequest = function (resource, body) {
        return this.http.post(this.url + resource, body);
    };
    InventoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InventoryService);
    return InventoryService;
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