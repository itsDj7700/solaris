import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtGuidedBiopsyComponent } from './ct-guided-biopsy.component';

describe('CtGuidedBiopsyComponent', () => {
  let component: CtGuidedBiopsyComponent;
  let fixture: ComponentFixture<CtGuidedBiopsyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtGuidedBiopsyComponent]
    });
    fixture = TestBed.createComponent(CtGuidedBiopsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
