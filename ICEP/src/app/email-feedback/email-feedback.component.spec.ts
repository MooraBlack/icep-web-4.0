import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFeedbackComponent } from './email-feedback.component';

describe('EmailFeedbackComponent', () => {
  let component: EmailFeedbackComponent;
  let fixture: ComponentFixture<EmailFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
