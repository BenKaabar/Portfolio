import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoeditingComponent } from './videoediting.component';

describe('VideoeditingComponent', () => {
  let component: VideoeditingComponent;
  let fixture: ComponentFixture<VideoeditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoeditingComponent]
    });
    fixture = TestBed.createComponent(VideoeditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
