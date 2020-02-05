import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    InventoryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], InventoryService);
    return InventoryService;
}());
export { InventoryService };
//# sourceMappingURL=inventory.service.js.map