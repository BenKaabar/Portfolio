import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopementComponent } from './web-developement.component';

describe('WebDevelopementComponent', () => {
  let component: WebDevelopementComponent;
  let fixture: ComponentFixture<WebDevelopementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDevelopementComponent]
    });
    fixture = TestBed.createComponent(WebDevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
