import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavInventoryComponent } from './left-nav-inventory.component';

describe('LeftNavInventoryComponent', () => {
  let component: LeftNavInventoryComponent;
  let fixture: ComponentFixture<LeftNavInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
