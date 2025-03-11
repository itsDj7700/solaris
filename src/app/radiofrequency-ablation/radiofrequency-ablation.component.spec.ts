import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiofrequencyAblationComponent } from './radiofrequency-ablation.component';

describe('RadiofrequencyAblationComponent', () => {
  let component: RadiofrequencyAblationComponent;
  let fixture: ComponentFixture<RadiofrequencyAblationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadiofrequencyAblationComponent]
    });
    fixture = TestBed.createComponent(RadiofrequencyAblationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
