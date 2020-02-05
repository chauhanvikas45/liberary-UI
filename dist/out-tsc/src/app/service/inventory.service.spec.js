import { TestBed } from '@angular/core/testing';
import { InventoryService } from './inventory.service';
describe('InventoryService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(InventoryService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=inventory.service.spec.js.map