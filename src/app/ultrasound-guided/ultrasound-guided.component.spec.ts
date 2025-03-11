import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasoundGuidedComponent } from './ultrasound-guided.component';

describe('UltrasoundGuidedComponent', () => {
  let component: UltrasoundGuidedComponent;
  let fixture: ComponentFixture<UltrasoundGuidedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltrasoundGuidedComponent]
    });
    fixture = TestBed.createComponent(UltrasoundGuidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
