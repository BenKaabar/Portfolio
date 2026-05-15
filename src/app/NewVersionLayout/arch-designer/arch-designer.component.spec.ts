import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchDesignerComponent } from './arch-designer.component';

describe('ArchDesignerComponent', () => {
  let component: ArchDesignerComponent;
  let fixture: ComponentFixture<ArchDesignerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchDesignerComponent]
    });
    fixture = TestBed.createComponent(ArchDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
