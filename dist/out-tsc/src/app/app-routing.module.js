import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LeftNavInventoryComponent } from './left-nav-inventory/left-nav-inventory.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddBookComponent } from './add-book/add-book.component';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'left-nav-inventory', component: LeftNavInventoryComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'add-book', component: AddBookComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                RouterModule.forRoot(routes)
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map