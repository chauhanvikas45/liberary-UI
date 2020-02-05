import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { mock_inventory } from '../Mock_data/mock_data_inventory';
import { Router } from '@angular/router';
import { MatTableDataSource, } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { InventoryService } from '../service/inventory.service';
//import { MatTableDataSource } from '@angular/material';
var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(router, inventoryService) {
        this.router = router;
        this.inventoryService = inventoryService;
        this.mockInventory = mock_inventory;
        this.bookList = [];
        this.displayedColumns = ['id', 'name', 'author', 'category', 'price', 'action'];
        this.dataSource = new MatTableDataSource(this.bookList);
        //dataSource = this.mockInventory;
        this.empty = new FormControl('', [Validators.required, Validators.nullValidator]);
        this.getInventoryList();
    }
    InventoryComponent.prototype.getErrorMessage = function () {
        return this.empty.hasError('required') ? 'You must enter a value' :
            this.empty.hasError('price') ? 'Not valid ' :
                '';
    };
    InventoryComponent.prototype.ngOnInit = function () {
        //console.log("MOCK DATA--",this.mockInventory);
    };
    InventoryComponent.prototype.getInventoryList = function () {
        var _this = this;
        this.inventoryService.getReequest('/inventory').subscribe(function (result) {
            //console.log(result);
            _this.bookList = result;
            _this.dataSource = new MatTableDataSource(_this.bookList);
        });
        console.log("newwwwww " + this.bookList);
        console.log("end");
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
    InventoryComponent.prototype.addBook = function (inventory) {
        var _this = this;
        console.log("in add book form" + inventory);
        console.log("in add book form" + inventory);
        console.log("in add book form" + inventory);
        console.log("in add book form" + inventory);
        //this.router.navigate(['./add-book']);
        this.inventoryService.postRequest('/inventory', inventory).subscribe(function (result) {
            _this.bookList = result;
            _this.getInventoryList;
        });
        this.show = false;
    };
    InventoryComponent.prototype.add = function () {
        console.log("in add book form");
        //this.router.navigate(['./add-book']);
        this.show = true;
    };
    InventoryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-inventory',
            templateUrl: './inventory.component.html',
            styleUrls: ['./inventory.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, InventoryService])
    ], InventoryComponent);
    return InventoryComponent;
}());
export { InventoryComponent };
//# sourceMappingURL=inventory.component.js.map