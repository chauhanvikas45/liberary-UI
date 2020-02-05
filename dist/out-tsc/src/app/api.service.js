import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "http://localhost:3000";
    }
    ApiService.prototype.get = function () {
        return this.httpClient.get(this.SERVER_URL);
    };
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map