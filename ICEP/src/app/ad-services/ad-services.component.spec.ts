import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdServicesComponent } from './ad-services.component';

describe('AdServicesComponent', () => {
  let component: AdServicesComponent;
  let fixture: ComponentFixture<AdServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
