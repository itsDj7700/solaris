import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedBlocksComponent } from './guided-blocks.component';

describe('GuidedBlocksComponent', () => {
  let component: GuidedBlocksComponent;
  let fixture: ComponentFixture<GuidedBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidedBlocksComponent]
    });
    fixture = TestBed.createComponent(GuidedBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
