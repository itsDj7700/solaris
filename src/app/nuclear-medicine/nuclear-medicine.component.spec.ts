import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuclearMedicineComponent } from './nuclear-medicine.component';

describe('NuclearMedicineComponent', () => {
  let component: NuclearMedicineComponent;
  let fixture: ComponentFixture<NuclearMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuclearMedicineComponent]
    });
    fixture = TestBed.createComponent(NuclearMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
