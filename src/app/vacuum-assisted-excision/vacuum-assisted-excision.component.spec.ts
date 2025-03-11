import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumAssistedExcisionComponent } from './vacuum-assisted-excision.component';

describe('VacuumAssistedExcisionComponent', () => {
  let component: VacuumAssistedExcisionComponent;
  let fixture: ComponentFixture<VacuumAssistedExcisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacuumAssistedExcisionComponent]
    });
    fixture = TestBed.createComponent(VacuumAssistedExcisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
