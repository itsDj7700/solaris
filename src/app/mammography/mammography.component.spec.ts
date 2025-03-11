import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MammographyComponent } from './mammography.component';

describe('MammographyComponent', () => {
  let component: MammographyComponent;
  let fixture: ComponentFixture<MammographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MammographyComponent]
    });
    fixture = TestBed.createComponent(MammographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
