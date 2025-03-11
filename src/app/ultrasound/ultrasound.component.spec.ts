import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasoundComponent } from './ultrasound.component';

describe('UltrasoundComponent', () => {
  let component: UltrasoundComponent;
  let fixture: ComponentFixture<UltrasoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltrasoundComponent]
    });
    fixture = TestBed.createComponent(UltrasoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
