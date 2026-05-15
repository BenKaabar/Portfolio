import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopementDetailsComponent } from './web-developement-details.component';

describe('WebDevelopementDetailsComponent', () => {
  let component: WebDevelopementDetailsComponent;
  let fixture: ComponentFixture<WebDevelopementDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDevelopementDetailsComponent]
    });
    fixture = TestBed.createComponent(WebDevelopementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
