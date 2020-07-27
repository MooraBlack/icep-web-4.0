import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinforCardComponent } from './userinfor-card.component';

describe('UserinforCardComponent', () => {
  let component: UserinforCardComponent;
  let fixture: ComponentFixture<UserinforCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinforCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinforCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
