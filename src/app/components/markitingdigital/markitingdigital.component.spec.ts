import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkitingdigitalComponent } from './markitingdigital.component';

describe('MarkitingdigitalComponent', () => {
  let component: MarkitingdigitalComponent;
  let fixture: ComponentFixture<MarkitingdigitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkitingdigitalComponent]
    });
    fixture = TestBed.createComponent(MarkitingdigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
