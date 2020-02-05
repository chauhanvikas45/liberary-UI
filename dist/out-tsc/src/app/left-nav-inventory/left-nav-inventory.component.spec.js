import { async, TestBed } from '@angular/core/testing';
import { LeftNavInventoryComponent } from './left-nav-inventory.component';
describe('LeftNavInventoryComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LeftNavInventoryComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LeftNavInventoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=left-nav-inventory.component.spec.js.map