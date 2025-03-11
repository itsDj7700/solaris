import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumAssistedBiopsComponent } from './vacuum-assisted-biops.component';

describe('VacuumAssistedBiopsComponent', () => {
  let component: VacuumAssistedBiopsComponent;
  let fixture: ComponentFixture<VacuumAssistedBiopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacuumAssistedBiopsComponent]
    });
    fixture = TestBed.createComponent(VacuumAssistedBiopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
