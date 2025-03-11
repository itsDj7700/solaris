import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaricoseVeinAblationComponent } from './varicose-vein-ablation.component';

describe('VaricoseVeinAblationComponent', () => {
  let component: VaricoseVeinAblationComponent;
  let fixture: ComponentFixture<VaricoseVeinAblationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaricoseVeinAblationComponent]
    });
    fixture = TestBed.createComponent(VaricoseVeinAblationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
