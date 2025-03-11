import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetGuideComponent } from './pet-guide.component';

describe('PetGuideComponent', () => {
  let component: PetGuideComponent;
  let fixture: ComponentFixture<PetGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetGuideComponent]
    });
    fixture = TestBed.createComponent(PetGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
