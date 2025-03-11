import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneDensitometryComponent } from './bone-densitometry.component';

describe('BoneDensitometryComponent', () => {
  let component: BoneDensitometryComponent;
  let fixture: ComponentFixture<BoneDensitometryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoneDensitometryComponent]
    });
    fixture = TestBed.createComponent(BoneDensitometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
